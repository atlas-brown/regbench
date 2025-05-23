"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tls_1 = __importDefault(require("tls"));
const net_1 = __importDefault(require("net"));
const debug_1 = __importDefault(require("debug"));
const socks_1 = __importDefault(require("./socks"));
const debug = (0, debug_1.default)('mqttjs:tls');
function connect(opts) {
    const { host, port, socksProxy } = opts, rest = __rest(opts, ["host", "port", "socksProxy"]);
    return tls_1.default.connect(socksProxy
        ? Object.assign(Object.assign({}, rest), { socket: (0, socks_1.default)(host, port, socksProxy, {
                timeout: opts.socksTimeout,
            }) }) : opts);
}
const buildStream = (client, opts) => {
    opts.port = opts.port || 8883;
    opts.host = opts.hostname || opts.host || 'localhost';
    if (net_1.default.isIP(opts.host) === 0) {
        opts.servername = opts.host;
    }
    opts.rejectUnauthorized = opts.rejectUnauthorized !== false;
    delete opts.path;
    debug('port %d host %s rejectUnauthorized %b', opts.port, opts.host, opts.rejectUnauthorized);
    const connection = connect(opts);
    connection.on('secureConnect', () => {
        if (opts.rejectUnauthorized && !connection.authorized) {
            connection.emit('error', new Error('TLS not authorized'));
        }
        else {
            connection.removeListener('error', handleTLSerrors);
        }
    });
    function handleTLSerrors(err) {
        if (opts.rejectUnauthorized) {
            client.emit('error', err);
        }
        connection.end();
    }
    connection.on('error', handleTLSerrors);
    return connection;
};
exports.default = buildStream;
//# sourceMappingURL=tls.js.map