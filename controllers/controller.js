const {Passenger, Ticket, PassengerTicket} = require('../models/index')
const {checkPassword}=require('../helpers/functionHelper')

class Controller {

    static homePage(req, res){

        res.render('homePage')
    }
    static formRegist(req, res){
        res.render('formRegist')
    }
    static submitData(req, res){
        let newData ={
            Email: req.body.email,
            Fullname: req.body.fullname,
            Phone: req.body.phone,
            Password: req.body.password
        }
        Passenger.create(newData)
        .then(result =>{
            res.redirect('/')
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static loginForm(req,res){
        res.render('login')
        
    }
    static loggedIn(req,res){
        const email= req.body.email
        const password= req.body.password

        Passenger.findOne({
            where:{
                Email:email,
            }
        })
        .then(passenger=>{
            if(passenger && checkPassword(password,passenger.Password)){
                req.session.PassengerId= passenger.id
                res.redirect('/')
            }else{
                res.send(`Oops! Invalid Usename or Password`)
            }
        })
        .catch(err=>{
            res.send(err)
        })
        
    }

    static listTicket(req, res){
        Ticket.findAll({
            include:[Passenger]
        })
        .then(data =>{
           
            res.render('listTicket', {data})
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static buyTicket(req, res){
       
        let buyerData = {
            TicketId: +req.params.id,
            PassengerId: req.session.PassengerId
        }
        PassengerTicket.create(buyerData)
        .then(result =>{

            res.redirect('/orders')
           
        })
        .catch(err =>{
            res.send(err)
        })
    
    }

    static listOrders(req, res){
       
        let userId = req.session.PassengerId // dari session login
        Passenger.findByPk(userId,{
            include:[Ticket]
        })
        .then(data =>{
          
            res.render('listOrders', {data})
        })
        .catch(err =>{
            res.send(err)
        })

       
        
    }
    static editProfile(req, res){
        let userId = req.session.PassengerId // dari session login
        Passenger.findByPk(userId)
        .then(data =>{
            res.render('editProfile', {data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static updateProfile(req, res){
        let userId = req.session.PassengerId 
        let updatedData = {
            Email: req.body.email,
            Fullname: req.body.fullname,
            Phone: req.body.phone,
            Password: req.body.password
        }
        Passenger.update(updatedData, {
            where:{
                id: userId
            }
        })
        .then(data =>{
            res.redirect('/')
        })
        .catch(err =>{
            res.send(err)
        })
    }
    static destroyTicket(req, res){
        let deleteId = +req.params.id
        let userId = req.session.PassengerId 
        
        PassengerTicket.destroy({
            where:{
                PassengerId: userId,
                TicketId: deleteId
            }
        })
        .then(data =>{
            res.redirect('/orders')
        })
        .catch(err =>{
            res.send(err)
        })

    }
    static logout(req,res){
        req.session.destroy(function (err) {
            res.redirect('/'); //Inside a callback… bulletproof!
           });
    }
}
    
    




module.exports= Controller