const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Company', companySchema)
