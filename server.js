const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/Companys', { useNewUrlParser: true }).then(() => {
    console.log('Conected Mongodb')
}).catch(err => {
    console.log(err)
})

//body parser
app.use(bodyParser.json())

//routes
const companyRouter = require('./api/routes/company')
const officeRouter = require('./api/routes/office')
app.use('/api', companyRouter)
app.use('/api', officeRouter)

//listen port
app.listen(5000, () => {
    console.log(`listen at port 5000`)
})
