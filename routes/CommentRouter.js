const router = require('express').Router()
const controller = require('../controllers/CommentController')

router.post('/cards/:card_id/comments', controller.CreateComment)
// router.put('/comments/:comment_id', controller.UpdateComment)
router.delete('/comments/:comment_id', controller.DeleteComment)

module.exports = router
