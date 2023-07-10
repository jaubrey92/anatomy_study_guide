const { Card } = require('../models')

const CreateComment = async (req, res) => {
  const card = await Card.findById(req.params.card_id)
  card.comments.push(req.body)
  try {
    await card.save()
    res.send(card)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  const card = await Card.findOne({
    'comments._id': req.params.comment_id
  })
  card.comments.remove(req.params.comment_id)
  await card.save()
  res.send({ msg: 'Comment Deleted', status: 'Ok' })
}

module.exports = {
  CreateComment,
  DeleteComment
}
