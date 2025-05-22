var Request = require("./Request.js").Request;
var Response = require("./Response.js").Response;
var BinaryData = require("./../data/BinaryData.js").BinaryData;
var RequestProcessor = require("./RequestProcessor.js").RequestProcessor;

var fs = require('fs');
var http = require('http');
var path = require('path');

/**
 * @class Server Main http server class. Wraps native node.js http object. Creates Request processor instance and dispatch processing.
 * @param {Class} RequestProcessorClass Subclass of RequestProcessor family.
 */
var Server = function (RequestProcessorClass) {
    this.RequestProcessorClass = RequestProcessorClass;
    this._nativeServers = [];
    this._requestCounter = 0;
    //Zmienna wskazuje, czy stworzony w konstruktorze nativeServer miał wywołaną metodę listen bądź listenSocket
    //Trzeba niestety zrobić tak, ponieważ każde wywołanie project startera najpierw wywołuje getClusterNode()
    //a potem wywołuje listen, co tworzyło i tak nową instancję serwera czyniąc pierwszy nieużywanym.
    this._firstListenApplied = false;
    // default for private cloud due to limits
    this._maxConnections = 512;

    //monitorowanie iwentlupa
    this._eventLoopTimer = null;
    this._eventLoopRefreshTime = Server.EVENTLOOP_TIMER;

    //
    this._createNativeServer();
};

Server.prototype.setMaxConnections = function(maxConn) {
    if (!isNaN(maxConn)) {
        if (maxConn > 0) {
            this._maxConnections = maxConn;
            return;
        }
    }
    console.error('Server.setMaxConnections - wrong parameter:', maxConn);
};

Server.prototype.startEventLoopMeasure = function () {
    var that = this;
    var startTime = Date.now();
    var eventLoopTime = 0;

    this._eventLoopTimer = setTimeout(function () {
        eventLoopTime = (Date.now() - startTime) - that._eventLoopRefreshTime;

        if (eventLoopTime < 0) {
            eventLoopTime = 0;
        }

        console.info('Server/eventloop: time:', eventLoopTime);
        clearTimeout(that._eventLoopTimer);
        that.startEventLoopMeasure();
    }, this._eventLoopRefreshTime);
};

Server.prototype.stopEventLoopMeasure = function () {
    console.info('Server/stopEventLoopMeasure: event loop refresh STOPPED.');
    clearTimeout(this._eventLoopTimer);
};

Server.prototype.setEventLoopSampleInterval = function (time) {
    this._eventLoopRefreshTime = time;
};

Server.prototype._createNativeServer = function() {
    if (!this._firstListenApplied && this._nativeServers.length > 0) {
        this._firstListenApplied = true;
        return this._nativeServers[0];
    }

    var that = this;
    var nativeServer = http.createServer(function (request, response) {
        that._onRequestHandler(request, response);
    });

    this._nativeServers.push(nativeServer);

    return nativeServer;
};

Server.prototype.listen = function (port, host, callback) {
    var nativeServer = this._createNativeServer();

    nativeServer._backlog = 4096;
    nativeServer.listen(port, host, callback);
    nativeServer.maxConnections = this._maxConnections;

    console.info('Native server connections limit:', nativeServer.maxConnections);
    console.info('process PID:', process.pid);
    
    return nativeServer;
};

Server.prototype.listenFD = function (fd, protocol) {
    //FIXME: trzeba by to naruchac jakos
    throw new Error('listenFD is not supported for node >= 0.6');
};

Server.prototype.listenSocket = function (socketPath, options, callback) {
    if (callback === undefined) {
        callback = options;
        options = {};
    }

    options.makedirs = options.makedirs || false;
    options.socketPerm = options.socketPerm || 0700;
    options.dirPerm = options.dirPerm || 0700;

    var that = this;
    var doListen = function () {
        fs.unlink(socketPath, function (unlinkErr) {
            if (unlinkErr && unlinkErr.code !== 'ENOENT') {
                return callback(unlinkErr);
            }

            var nativeServer = that._createNativeServer();

            nativeServer._backlog = 4096;
            nativeServer.listen(socketPath, function (err) {
                if (err) {
                    return callback(err);
                }

                fs.chmod(socketPath, options.socketPerm, function (chmodErr) {
                    if (chmodErr) {
                        return callback(chmodErr);
                    }

                    return callback(null, nativeServer);
                });
            });
        });
    };

    if (!options.makedirs) {
        return doListen();
    }

    var dirname = path.dirname(socketPath);
    var createDir = function (dir, cb) {
        fs.mkdir(dir, options.dirPerm, function (mkdirErr) {
            if (mkdirErr && mkdirErr.code === 'ENOENT') {
                return createDir(path.dirname(dir), cb);
            } else if (mkdirErr && mkdirErr.code !== 'EEXIST') {
                return callback(mkdirErr);
            }

            return cb();
        });
    };

    return createDir(dirname, doListen);
};

/**
 * Returns native http server instance.
 * @public
 * @returns http.Server
 */
Server.prototype.getClusterNode = function () {
    return this._nativeServers[0];
};

Server.prototype.close = function () {
    for (var i = 0, l = this._nativeServers.length; i < l; i++) {
        this._nativeServers[i].close();
    }
};

/**
 * @private
 */

Server.prototype._onRequestHandler = function (httpRequest, httpResponse) {
    //czas rozpoczecia przetwarzania requestu
    httpRequest.__timeStart = Date.now();
    //console.log('\n-- request started');

    if (httpRequest.method == 'GET') {
        this._process(httpRequest, httpResponse);
    } else {
        var that = this;

        var dataLength = 0, buffers = [];

        // gathering post data
        httpRequest.on('data', function (data) {
            buffers.push(data);
            dataLength += data.length;
        });

        // i'm the master of every buffer @ post data'
        httpRequest.on('end', function () {

            var joinedBuffer = new Buffer(dataLength), bufferPosition = 0;
            for (var i = 0, l = buffers.length; i < l; i++) {
                buffers[i].copy(joinedBuffer, bufferPosition);
                bufferPosition += buffers[i].length;
            }
            // 2325 - 2336

            httpRequest.data = new BinaryData(
                    joinedBuffer,
                    BinaryData.Encoding.BINARY
                    );
            // 2109 - 2283

            that._process(httpRequest, httpResponse);

            // 897 - 936
        });
    }
};

Server.prototype._process = function (httpRequest, httpResponse) {
    var request = new Request(httpRequest);    // 824-831 - return w konstruktorze

    // 1381 - 1428
    var response = new Response(httpResponse);
    // 1246 - 1362
    //httpResponse.end('404 not found'); return;

    var requestProcessor = this.createRequestProcessor();
    requestProcessor.process(request, response);
    // 1243 - 1275

    // 900 - 932

};

Server.prototype.getServer = function () {
    return this;
};

Server.prototype.createRequestProcessor = function () {
    var requestProcessor = new this.RequestProcessorClass(this.getServer());
    if(!(requestProcessor instanceof  RequestProcessor)){
        throw Server.Exception.WRONG_PROCESSOR_CLASS;
    }
    return requestProcessor;
};

Server.prototype.getStats = function () {
    //Wsteczna kompatybilnosc do wywalenia po aktualizacji node-server
    return {};
};

/**
 * Namespace for exceptions messages.
 * @static
 * @namespace
 */
Server.Exception = {};
/**
 * @static
 * @public
 */
Server.Exception.WRONG_PROCESSOR_CLASS = "Request processor class must be inheriting RequestProcessor";

Server.EVENTLOOP_TIMER = 1000;

exports.Server = Server;
