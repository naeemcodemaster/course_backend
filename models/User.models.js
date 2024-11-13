const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


Schema.pre("save", async function () {

    this.password = await bcrypt.hash(this.password, 12);
    console.log("middleware call")
})

const model = mongoose.model("user", Schema);
module.exports = model;


