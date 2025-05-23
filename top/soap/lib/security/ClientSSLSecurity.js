"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSSLSecurity = void 0;
const fs = __importStar(require("fs"));
const https = __importStar(require("https"));
const _ = __importStar(require("lodash"));
/**
 * activates SSL for an already existing client
 *
 * @module ClientSSLSecurity
 * @param {Buffer|String}   key
 * @param {Buffer|String}   cert
 * @param {Buffer|String|Array}   [ca]
 * @param {Object}          [defaults]
 * @constructor
 */
class ClientSSLSecurity {
    constructor(key, cert, ca, defaults) {
        if (key) {
            if (Buffer.isBuffer(key)) {
                this.key = key;
            }
            else if (typeof key === 'string') {
                this.key = fs.readFileSync(key);
            }
            else {
                throw new Error('key should be a buffer or a string!');
            }
        }
        if (cert) {
            if (Buffer.isBuffer(cert)) {
                this.cert = cert;
            }
            else if (typeof cert === 'string') {
                this.cert = fs.readFileSync(cert);
            }
            else {
                throw new Error('cert should be a buffer or a string!');
            }
        }
        if (ca) {
            if (Buffer.isBuffer(ca) || Array.isArray(ca)) {
                this.ca = ca;
            }
            else if (typeof ca === 'string') {
                this.ca = fs.readFileSync(ca);
            }
            else {
                defaults = ca;
                this.ca = null;
            }
        }
        this.defaults = {};
        _.merge(this.defaults, defaults);
        this.agent = null;
    }
    toXML() {
        return '';
    }
    addOptions(options) {
        let httpsAgent = null;
        options.key = this.key;
        options.cert = this.cert;
        options.ca = this.ca;
        _.merge(options, this.defaults);
        if (!!options.forever) {
            if (!this.agent) {
                options.keepAlive = true;
                this.agent = new https.Agent(options);
            }
            httpsAgent = this.agent;
        }
        else {
            httpsAgent = new https.Agent(options);
        }
        options.httpsAgent = httpsAgent;
    }
}
exports.ClientSSLSecurity = ClientSSLSecurity;
//# sourceMappingURL=ClientSSLSecurity.js.map