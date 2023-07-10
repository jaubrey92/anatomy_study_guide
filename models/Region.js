const { Schema } = require('mongoose')
const cardSchema = require('./Card')

const regionSchema = new Schema(
  {
    content: { type: String, required: true },
    muscles: [cardSchema]
  },
  {
    timestamps: true
  }
)

module.exports = regionSchema
