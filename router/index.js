const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.homePage)
router.get('/register', Controller.formRegist)
router.post('/register', Controller.submitData)
router.get('/login', Controller.loginForm)
router.post('/login', Controller.loggedIn)
router.get('/tickets', Controller.listTicket)
router.post('/order/:id', Controller.buyTicket)
router.get('/orders', Controller.listOrders)
router.get('/edit/profile', Controller.editProfile)
router.post('/edit/profile', Controller.updateProfile)


module.exports = router