const router = require('express').Router()
const controller = require('../controllers/RegionController')

router.get('/', controller.GetRegions)
router.get('/:region_id', controller.GetRegion)
router.post('/', controller.CreateRegion)
// router.put('/:card_id', controller.UpdateCard)
// router.delete('/:card_id', controller.DeleteCard)

module.exports = router
