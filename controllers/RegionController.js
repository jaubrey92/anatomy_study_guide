const { Region } = require('../models')

const UpdateRegion = async (req, res) => {
  const region = await Region.findById(req.params.region_id)
  region.muscles.push(req.body)
  try {
    await region.save()
    res.send(region)
  } catch (error) {
    throw error
  }
}

const GetRegions = async (req, res) => {
  try {
    const regions = await Region.find({})
    res.send(regions)
  } catch (error) {
    throw error
  }
}

const CreateRegion = async (req, res) => {
  try {
    const region = await Region.create({ ...req.body })
    res.send(region)
  } catch (error) {
    throw error
  }
}

const GetRegion = async (req, res) => {
  try {
    const region = await Region.findById(req.params.region_id)
    res.send(region)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRegions,
  CreateRegion,
  GetRegion,
  UpdateRegion
}
