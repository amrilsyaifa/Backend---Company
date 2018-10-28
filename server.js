const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/Companys', { useNewUrlParser: true }).then(() => {
    console.log('Conected Mongodb')
}).catch(err => {
    console.log(err)
})

app.use(bodyParser.json())

const companyRouter = require('./api/routes/company')
app.use('/api', companyRouter)

app.listen(5000, () => {
    console.log(`listen at port 5000`)
})
