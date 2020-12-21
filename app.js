'use strict';

var HapiServer = require('./src/config/hapi');
var TransactionWatch = require('./src/lib/transactionwatch/lib/transactionwatch');
var Mongoose = require('mongoose');

TransactionWatch.init(Mongoose);
require('./src/database/mongodb');

async function start() {
    var server = await HapiServer.deployment();
    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

start();