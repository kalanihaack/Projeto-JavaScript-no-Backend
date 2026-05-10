const express = require("express") //constante para chamar o servidor via express
const consign = require("consign") //atraves do consign, criamos usando app com maior facilidade
const bodyParser = require("body-parser") //biblioteca para retornar o que vira na requisicao

let app = express()  //chama o servidor http

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

consign().include("routes").include("utils").into(app)

app.listen(3000, "127.0.0.1", () => {
    console.log("servidor rodando")
}) //ouve o servidor e retorna se funcionou