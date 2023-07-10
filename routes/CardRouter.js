const router = require('express').Router()
const controller = require('../controllers/CardController')

router.get('/', controller.GetCards)
router.get('/:card_id', controller.GetCard)
router.post('/', controller.CreateCard)
router.put('/:card_id', controller.UpdateCard)
router.delete('/:card_id', controller.DeleteCard)

module.exports = router
