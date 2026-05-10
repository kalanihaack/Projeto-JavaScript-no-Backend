const express = require("express") //constante para chamar o servidor via express

let app = express()  //chama o servidor http 

app.get("/", (req, res) => {


    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Olá</h1>")//retorno da url / (volta ola com formatacao)

})

app.get("/users", (req, res) => {
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

app.listen(3000, "127.0.0.1", () => {
    console.log("servidor rodando")
}) //ouve o servidor e retorna se funcionou