module.exports = app=>{ 

app.get("/", (req, res) => {

    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Olá</h1>")//retorno da url / (volta ola com formatacao)

})
}