'use strict';

var internals = {};
var Notes = require('../../database/models/Notes');

internals.home = (req, reply) => {
    return Notes.find({ userID: req.auth.credentials._id })
        .then(res => {
            return reply.view('home/home.html', {
                notesList: res.map(data => {
                    return {
                        _id: data._id,
                        title: data.title,
                        note: data.note,
                    }
                }),
                messageTitle: req.query.messageTitle,
                message: req.query.message,
                alertType: req.query.alertType
            });
        });

}

internals.add_note = (req, reply) => {
    const newNote = Notes({
        userID: req.auth.credentials._id,
        title: req.payload.title,
        note: req.payload.note
    });

    return newNote.save()
        .then(() => {
            return reply.redirect('/home?message=Note successfully added. &messageTitle=Success &alertType=success');
        })
        .catch(err => {
            console.log(err);
            return reply.redirect('/home?message=Please fill all fields. &messageTitle=Failed &alertType=danger');
        });
}

internals.edit_note = (req, reply) => {
    return Notes.findByIdAndUpdate({ _id: req.params.id }, req.payload)
        .then(() => {
            return reply.redirect('/home?message=Note successfully edited. &messageTitle=Success &alertType=success');
        })
        .catch(err => {
            console.log(err);
            return reply.redirect('/home?message=Please fill all fields. &messageTitle=Failed &alertType=danger');
        });

}

internals.delete_note = (req, reply) => {
    return Notes.findByIdAndDelete({ _id: req.params.id })
        .then(() => {
            return reply.redirect('/home?message=Note successfully deleted. &messageTitle=Success &alertType=success');
        });

}

module.exports = internals;