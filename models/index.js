const mongoose = require('mongoose')
const cardSchema = require('./Card')

const Card = mongoose.model('Card', cardSchema)

module.exports = {
  Card
}
