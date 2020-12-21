'use strict';

var Mongoose = require('mongoose'),
    Config = require('../config');

var connection_string = '';

if(Config.env.dev){
    connection_string = 'mongodb://'
    +  Config.mongodb.ip
    + ':'
    +  Config.mongodb.port
    + '/'
    + Config.mongodb.app
}else{
    connection_string = 'mongodb://'
    +  Config.mongodb.username
    + ':'
    +  Config.mongodb.password
    + '@'
    +  Config.mongodb.ip
    + ':'
    +  Config.mongodb.port
    + '/'
    + Config.mongodb.app
    + '?authSource=admin';
}

Mongoose.Promise = global.Promise;
Mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongodb Connected <3 Hehe"))
    .catch((err) => console.log(err));
