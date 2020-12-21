const mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Notes = mongoose.model('Notes', NotesSchema);
module.exports = Notes;