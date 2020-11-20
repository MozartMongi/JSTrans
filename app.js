const express = require('express')
const app = express()
const session= require('express-session')
const port = 4000;
const router = require('./router/index')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))
app.use('/', router)
app.use(express.static(__dirname + 'styles'))

app.listen(port, () => {
    console.log(` Running on port ${port}`)
})