const router = require('express').Router()
const controller = require('../controllers/RegionController')

router.get('/', controller.GetRegions)
router.get('/:region_id', controller.GetRegion)
router.post('/', controller.CreateRegion)
router.put('/:region_id/cards', controller.UpdateRegion)

module.exports = router
