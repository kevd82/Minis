const mongoose = require("mongoose");

const MiniSchema = new mongoose.Schema({

    name: {
        type: String,
        required:  [true, "Name required!"],
        maxLength: [30, "Name must be 30 characters or less!"],
        },

    company: {
        type:  String,
        required:  [true, "Company name required; enter --Unknown-- if needed."],
        maxLength: [30, "Company must be 30 characters or less"]
        }
})