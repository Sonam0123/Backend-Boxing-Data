const express = require('express')
const parser = require('body-parser')
const app = express()
const cors= require('cors')
const boxerController = require('./controllers/boxer')



app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())


app.use('/api', boxerController)

app.listen(8000, () => console.log('Listening on port 4000'))
