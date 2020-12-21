'use strict';
var Handlers = require('./handlers'), internals = {};

internals.endpoints = [
    {
        method: ['GET'],
        path: '/home',
        handler: Handlers.home,
        config: {
            auth: {
                strategy: 'standard',
            }
        }
    },

    {
        method: ['POST'],
        path: '/add-note',
        handler: Handlers.add_note,
        config: {
            auth: {
                strategy: 'standard',
            }
        }
    },

    {
        method: ['POST'],
        path: '/edit-note/{id}',
        handler: Handlers.edit_note,
        config: {
            auth: {
                strategy: 'standard',
            }
        }
    },

    {
        method: ['GET'],
        path: '/delete-note/{id}',
        handler: Handlers.delete_note,
        config: {
            auth: {
                strategy: 'standard',
            }
        }
    },

];

module.exports = internals;