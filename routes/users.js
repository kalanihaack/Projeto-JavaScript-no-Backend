let express = require("express")
let routes = express.Router()

routes.get("/", (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.json({
        users: [{
            name: "teste",
            email: "teste@teste.com"
            //id: 1
        }] //switch para retorno da /users que retorna um json de usuarios
    })
 })   

 routes.get("/admin", (req, res)=>{

    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.json({
        users: []

 })
 })

 module.exports = routes