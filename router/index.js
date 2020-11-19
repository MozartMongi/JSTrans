const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/', Controller.homePage)
router.get('/register', Controller.formRegist)
router.post('/register', Controller.submitData)
router.get('/login', (req,res)=>{
  res.render('login')
})


module.exports = router