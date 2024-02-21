// REQUIRED
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const basicSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    newPost: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('BasicPost', basicSchema)