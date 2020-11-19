const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.homePage)
router.get('/register', Controller.formRegist)
router.post('/register', Controller.submitData)
router.get('/tickets', Controller.listTicket)
router.post('/order/:id', Controller.buyTicket)


module.exports = router