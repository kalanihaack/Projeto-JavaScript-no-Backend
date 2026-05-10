const express = require("express") //constante para chamar o servidor via express
const consign = require("consign") //atraves do consign, criamos usando app com maior facilidade

let app = express()  //chama o servidor http

consign().include("routes").into(app)

app.listen(3000, "127.0.0.1", () => {
    console.log("servidor rodando")
}) //ouve o servidor e retorna se funcionou