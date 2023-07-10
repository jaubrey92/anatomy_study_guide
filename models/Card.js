const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    content: { type: String }
  },
  {
    timestamps: true
  }
)

const cardSchema = new Schema(
  {
    title: { type: String, required: true },
    origin: { type: String, required: true },
    insertion: { type: String, required: true },
    innervation: { type: String, required: true },
    action: { type: String, required: true },
    image: { type: String, required: true },
    comments: [commentSchema]
  },
  { timestamps: true }
)

module.exports = cardSchema
