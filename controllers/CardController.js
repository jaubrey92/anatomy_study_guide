const { Card } = require('../models')

const GetCards = async (req, res) => {
  try {
    const cards = await Card.find({})
    res.send(cards)
  } catch (error) {
    throw error
  }
}

const CreateCard = async (req, res) => {
  try {
    const card = await Card.create({ ...req.body })
    res.send(card)
  } catch (error) {
    throw error
  }
}

const GetCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.card_id)
    res.send(card)
  } catch (error) {
    throw error
  }
}

const UpdateCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.card_id, req.body, {
      new: true
    })
    res.send(card)
  } catch (error) {
    throw error
  }
}

const DeleteCard = async (req, res) => {
  try {
    await Card.deleteOne({ _id: req.params.card_id })
    res.send({ msg: 'Post Deleted', status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCards,
  CreateCard,
  GetCard,
  UpdateCard,
  DeleteCard
}
