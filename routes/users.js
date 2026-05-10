let NeDB = require("nedb")
let db = new NeDB({
    filename:"users.db",
    autoload: true
})

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

    db.insert(req.body, (err, user)=>{ //enviando informacoes para o banco de dado via API que retorna o id unico dele

        if (err) {
            console.log(`error: ${err}`)
            res.status(400).json({
                error : err
            })
        } else {
            res.status(200).json(user)
        }
    })
 })

}