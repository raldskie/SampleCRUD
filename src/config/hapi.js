'use strict';

// Imports
var Hapi = require('@hapi/hapi'),
    Config = require('../config'),
    Routes = require('./routes'),
    Views = require('./views'),
    Auth = require('./auth');

var internals = {};

exports.deployment = async () => {
    // Start Hapi Server
    internals.server = new Hapi.Server({ debug: { request: ['error'] } });
    internals.server.payload = Buffer.alloc(104857610);

    // Host and Port Config
    internals.server = new Hapi.Server({
        host: '127.0.0.1',
        port: 5000,
    });

    // Set Views
    await Views.init(internals.server);

    // Set Authentication Strategy
    await Auth.setStrategy(internals.server);

    // Set Routes
    Routes.init(internals.server);

    return internals.server;
}
