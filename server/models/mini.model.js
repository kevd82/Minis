const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const miniSchema = new Schema({

    name: {
        type: String,
        required:  [true, "Name required!"],
        maxLength: [30, "Name must be 30 characters or less!"],
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
        required: [true, "Painted status is required!"],
    },

    category:  {
        type: String,
        required: [true, "Category is required!"],
    }
})