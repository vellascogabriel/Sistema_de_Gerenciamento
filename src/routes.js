const express = require('express')
const routes = express.Router()
const vendedores = require('./app/controllers/vendedores')
const clientes = require('./app/controllers/clientes')

routes.get('/', function(req, res){
    return res.redirect("/vendedores")
})


routes.get('/vendedores', vendedores.index)
routes.get('/vendedores/create', vendedores.create)
routes.get('/vendedores/:id', vendedores.show)
routes.get('/vendedores/:id/edit', vendedores.edit)
routes.post('/vendedores', vendedores.post)
routes.put("/vendedores", vendedores.put)
routes.delete("/vendedores", vendedores.delete)





routes.get('/clientes', clientes.index)
routes.get('/clientes/create', clientes.create)
routes.get('/clientes/:id', clientes.show)
routes.get('/clientes/:id/edit', clientes.edit)
routes.post('/clientes', clientes.post)
routes.put('/clientes', clientes.put)
routes.delete('/clientes', clientes.delete)


module.exports = routes

