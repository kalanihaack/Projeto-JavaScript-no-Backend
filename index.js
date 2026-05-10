const http = require("http") //constante para criar o metodo http

let server = http.createServer((req, res)=>{

    console.log("URL:", req.url)
    console.log("METHOD:", req.method)

    res.end("OK") 

}) //chama o servidor http e retorna qual a url e o metodo utilizado

server.listen(3000, "127.0.0.1", ()=>{
    console.log("servidor rodando")
}) //ouve o servidor e retorna se funcionou