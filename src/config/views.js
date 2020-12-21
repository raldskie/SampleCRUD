'use strict';

var internals = {},
    Handlebars = require('handlebars'),
    Path = require('path'),
    Inert = require('@hapi/inert'),
    Vision = require('vision');

internals.init = async function (server) {

    await server.register(Vision);
    //Using handlebars
    server.views({
        engines: {
            'html': Handlebars
        },
        isCached: false,
        relativeTo: __dirname,
        path: Path.join(__dirname, '../views'),
        layout: true,
        layoutPath: Path.join(__dirname, '../views/layout'),
        partialsPath: '../views/partials'
    })

    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });

    await server.register(Inert);
    //Load files located in ../assets
    server.route({
        method: 'GET',
        path: '/assets/{param*}',
        config: {
            auth: false
        },
        handler: {
            directory: {
                path: Path.join(__dirname, '../assets')
            }
        }
    })

};

module.exports = internals;
