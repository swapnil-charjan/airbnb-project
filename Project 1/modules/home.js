const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    houseName: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    rating:{ type: Number, required: true },
    description: {type: String, },
}, { timestamps: true });

module.exports = mongoose.model('home', homeSchema);
