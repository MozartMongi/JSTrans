const {Passenger, Ticket, PassengerTicket} = require('../models/index')

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
    static listTicket(req, res){
        Ticket.findAll()
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
            // PassengerId: req.session.PassengerId
            //PassengerId : ambil dari session ya bro karena ini tergantung siapa yg login
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

}


module.exports= Controller