const mongoose = require('mongoose')
const cardSchema = require('./Card')
const regionSchema = require('./Region')

const Card = mongoose.model('Card', cardSchema)
const Region = mongoose.model('Region', regionSchema)

module.exports = {
  Card,
  Region
}
