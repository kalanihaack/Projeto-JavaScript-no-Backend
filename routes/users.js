 module.exports = app=>{ 

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

 app.post("/users", (req, res)=>{

    res.json(req.body)  
 })

}