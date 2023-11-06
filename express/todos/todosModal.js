const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: String,
    status: Boolean,
});

module.exports = mongoose.model("Todo",TodoSchema)