const Company = require('../model/company')

// Create
exports.company_post_company = (req, res, next) => {
    const newCompany = new Company(req.body)
    newCompany
        .save()
        .then(result => {
            res.json({
                info: 'company created successfully.',
                company: result
            })
        })
        .catch(err => console.error(err))
}

// Read
exports.company_get_all = (req, res, next) => {
    Company.find()
        .then(companys => {
            res.json(companys)
        })
        .catch(err => console.error(err))
}

// Update
exports.company_put_company = (req, res, next) => {
    Company.update({ _id: req.params.id }, req.body)
        .then(company => {
            res.json({
                info: 'company updated successfully',
                company: company
            })
        })
        .catch(err => console.error(err))
}

// Delete
exports.company_delete_company = (req, res, next) => {
    Company.remove({ _id: req.params.id })
        .then(() => {
            res.json({ info: 'company removed successfully' })
        })
        .catch(err => console.error(err))
}