const Boxer = require('../models/Boxer')

const boxerData = require('./boxers')


Boxer.remove({})
Boxer.create(boxerData)
  .then(boxers => {
    console.log(boxers)
  })
  .catch(err => {
    console.log(err)
  })
