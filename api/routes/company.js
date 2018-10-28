const express = require('express')
const router = express.Router()
const CompanyController = require('../controller/company')

router.get('/company', CompanyController.company_get_all)
router.post('/company', CompanyController.company_post_company)
router.put('/company/:id', CompanyController.company_put_company)
router.delete('/company/:id', CompanyController.company_delete_company)

module.exports = router