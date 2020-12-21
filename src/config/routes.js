'use strict';

var Test = require('../routes/test/endpoints');
var Auth = require('../routes/auth/endpoints');


var internals = {};

//Concatentate the routes into one array
internals.routes = [].concat(
	Test.endpoints,
	Auth.endpoints
);

//Set the routes for the server
internals.init = function (server) {
	server.route(internals.routes);
};

module.exports = internals;
