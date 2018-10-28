const Company = require('../model/office')
const Office = require('../model/office')

// Create Office
exports.office_post_office = (req, res, next) => {
    Company.findById(req.body.companyid)
        .then(() => {
            const newOrder = new Office(req.body)
            newOrder.save()
                .then(result => {
                    res.status(200).json({
                        created: {
                            _id: result._id,
                            companyid: result.companyid,
                            name: result.name,
                            latitude: result.latitude,
                            longtitude: result.longtitude,
                            startdate: result.startdate
                        }
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Company not found',
                error: err
            })
        })
}

//Get All Office
exports.office_get_all = (req, res, next) => {
    Office.find()
        .then(docs => {
            res.status(200).json({
                Office: docs.map(doc => {
                    return doc
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

//Get Office by ID
exports.office_get_office = (req, res, next) => {
    const id = req.params.id
    Office.findById(id)
        .exec()
        .then(office => {
            if (office) {
                res.status(200).json({
                    office: {
                        office: office
                    }
                })
            } else {
                res.status(404).json({
                    office: 'No Valid Entry found for provided ID'
                })
            }
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        })
}