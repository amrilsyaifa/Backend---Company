const express = require('express')
const router = express.Router()
const OfficeController = require('../controller/office')

router.get('/company/office', OfficeController.office_get_all)
router.get('/company/office/:id', OfficeController.office_get_office)
router.post('/company/office', OfficeController.office_post_office)

module.exports = router