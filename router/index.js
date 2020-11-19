const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.homePage)
router.get('/register', Controller.formRegist)
router.post('/register', Controller.submitData)
router.get('/login', Controller.loginForm)
router.post('/login', Controller.loggedIn)


module.exports = router