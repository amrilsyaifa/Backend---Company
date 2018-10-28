const mongoose = require('mongoose')

const officeSchema = mongoose.Schema({
    companyid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Company',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longtitude: {
        type: Number,
        required: true
    },
    startdate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Office', officeSchema)