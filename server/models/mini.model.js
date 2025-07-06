const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MiniSchema = new Schema({

    name: {
        type: String,
        required:  [true, "Name required!"],
        maxLength: [30, "Name must be 30 characters or less!"],
        },

    image: {
        type: String,
        required: [true, "Image required!"],
    },

    imageTwo: {
        type: String,
    },

    imageThree: {
        type: String,
    },

    imageFour: {
        type: String,
    },

    company: {
        type:  String,
        required:  [true, "Company name required; enter --Unknown-- if needed."],
        maxLength: [30, "Company must be 30 characters or less!"]
        },

    code:  {
        type: String,
        required: [true, "Code required; enter --Unknown-- if needed."],
        maxLength: [30, "Code must be 30 characters or less!"],
    },

    year:  {
        type: String,
        required: [true, "Year required; enter --Unknown-- if needed."],
        maxLength: [4, "Year must be 4 digits or less!"],
    },

    sculptor:  {
        type: String,
        required: [true, "Sculptor required; enter --Unknown-- if needed."],
        maxLength: [30, "Sculptor must be 30 characters or less!"],
    },

    painted: {
        type: Boolean,
        default: false,
    },

    painter: {
        type: String
    },

    category:  {
        type: String,
        required: [true, "Category is required!"],
    }

}, {timestamps:true});

const Movie = mongoose.model("Miniature", MiniSchema );

module.exports = Miniature;