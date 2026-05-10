let NeDB = require("nedb")
let db = new NeDB({
    filename: "users.db",
    autoload: true
})

module.exports = app => {

    let route = app.route("/users")

    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (err) {
               app.utils.error.send(err, req, res) //se der erro, retorna o erro configurado em utils 
            } else {
                res.statusCode = 200
                res.setHeader("Content-Type", "application/json")
                res.json({
                    users
                })
            }
        })
    })

        route.post((req, res) => {

            db.insert(req.body, (err, user) => { //enviando informacoes para o banco de dado via API que retorna o id unico dele

                if (err) {
                    app.utils.error.send(err, req, res) //se der erro, retorna o erro configurado em utils 
                } else {
                    res.status(200).json(user)
                }
            })
        })

    }