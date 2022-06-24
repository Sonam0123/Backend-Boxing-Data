const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const boxerSchema = new Schema({
  image : String,
  name: String,
  stance: String,
  wins: Number,
  losses: Number,
  knockouts: Number
})
module.exports = mongoose.model('Boxer', boxerSchema)
