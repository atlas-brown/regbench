var Server = require('./Server.js').Server;

var ExpressServer = function (app) {
    app.disable('x-powered-by');
    app.disable('etag');
    Server.call(this, app);

    if (!process.env['DISABLE_EVENTLOOP_MEASURE']) {
        this.startEventLoopMeasure();
    }
};

ExpressServer.prototype = Object.create(Server.prototype);

ExpressServer.prototype._onRequestHandler = function (req, res) {
    this.RequestProcessorClass(req, res);
}

exports.ExpressServer = ExpressServer;
