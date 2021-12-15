const express = require('express')
const Shipper = require('./shippers-model')

const router = express.Router()

async function checkId(req, res, next) {
  try{
    const shipper = await Shipper.getById(req.params.id)
    if(shipper){
      req.shipper = shipper
      next()
    }else{
      res.status(404).json({message:"Shipper not found"})
    }
  }catch(err){
    next(err)
  }
}

function checkPayload(req, res, next) {
  const {ShipperName,Phone} = req.body
  if(ShipperName && Phone){
    next();
  }else{
    res.status(400).json({message:"Shipper name and phone required"})
  }
}

router.get('/', async (req, res, next) => {
  try {
    const data = await Shipper.get()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Shipper.getById(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkPayload, async (req, res, next) => {
  try {
    const data = await Shipper.create(req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkPayload, checkId, async (req, res, next) => {
  try {
    const data = await Shipper.update(req.params.id, req.body)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', checkId, async (req, res, next) => {
  try {
    const data = await Shipper.remove(req.params.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
