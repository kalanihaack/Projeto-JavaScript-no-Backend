const http = require("http") //constante para criar o metodo http

let server = http.createServer((req, res)=>{

    console.log("URL:", req.url)
    console.log("METHOD:", req.method)

    switch (req.url) {

        case "/": 

        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end("<h1>Olá</h1>")
        break //switch para retorno da url / (volta ola com formatacao)

        case "/users":

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            users: [{
                name:"teste",
                email:"teste@teste.com"
                //id: 1
            }] //switch para retorno da /users que retorna um json de usuarios
        }))
        break
    }

}) //chama o servidor http e retorna qual a url e o metodo utilizado

server.listen(3000, "127.0.0.1", ()=>{
    console.log("servidor rodando")
}) //ouve o servidor e retorna se funcionou