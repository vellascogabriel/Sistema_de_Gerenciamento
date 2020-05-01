const {age, date } = require('../../lib/utils')
const Vendedor = require('../models/Vendedor')

module.exports = {
    index(req, res){

        Vendedor.all(function(vendedores) {
            return res.render("vendedores/index", {vendedores})
        })
    },
    create(req, res){
        return res.render('vendedores/create')
    },
    post(req, res){
        
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {
    
                return res.send('Please, fill all the fields')
    
            }
        }
        
        Vendedor.create(req.body, function(vendedor){
            return res.redirect(`/vendedores/${vendedor.id}`)
        })
        
    },
    show(req, res){
        Vendedor.find(req.params.id, function(vendedor){
            if (!vendedor) return res.send("Vendedor não encontrado")

            vendedor.age = age(vendedor.birth)
            vendedor.services = vendedor.services.split(",")

            vendedor.created_at = date(vendedor.created_at).format

            return res.render("vendedores/show", { vendedor })
        })
    },
    edit(req, res){

        return
    },
    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys) {
            if (req.body[key] == "") {
    
                return res.send('Please, fill all the fields')
    
            }
        }
        return
    },
    delete(req, res){
        return
    }
}


