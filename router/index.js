const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

const isLoggedIn = function(req,res,next) {
  if(req.session.PassengerId){
    next();
  }else{
    res.redirect('/login')
  }
}

const preventLogin = function(req,res,next) {
  if(req.session.PassengerId){
   res.redirect('/')
  }else{
    next();
  }
}

router.get('/', Controller.homePage)
router.get('/register',preventLogin, Controller.formRegist)
router.post('/register',preventLogin, Controller.submitData)
router.get('/login',preventLogin, Controller.loginForm)
router.post('/login',preventLogin, Controller.loggedIn)

router.use(isLoggedIn)

router.get('/tickets', Controller.listTicket)
router.post('/order/:id', Controller.buyTicket)
router.get('/orders', Controller.listOrders)
router.get('/edit/profile', Controller.editProfile)
router.post('/edit/profile', Controller.updateProfile)
router.get('/delete/:id', Controller.destroyTicket)



module.exports = router