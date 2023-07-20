const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
    type: { type: String, required: true, },
    description: { type: String, required: true, },
    price: { type: Number, required: true, },
    company: {
        name: { type: String, required: true, },
    },
});

const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = Insurance;
