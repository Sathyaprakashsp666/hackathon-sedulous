const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    text: {type: String, required: true},
    description: {type: String, required: true},
}, {
    versionKey: false,
    timestamps: true
})

const Course = mongoose.model('career', courseSchema)
module.exports = Course