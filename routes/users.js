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
                    users //mostra todos os usuarios
                })
            }
        })
    })

    route.post((req, res) => {

        db.insert(req.body, (err, user) => { //enviando informacoes para o banco de dado via API que retorna o id unico dele

            if (err) {
                app.utils.error.send(err, req, res) //se der erro, retorna o erro configurado em utils 
            } else {
                res.status(200).json(user) //se der certo, cria o usuario
            }
        })
    })

    let routeId = app.route("/users/:id")

    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, user) => {

            if (err) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json(user)
            }
        }) //rota criada para puxar o usuario a partir do id dele
    })

    routeId.put((req, res) => {

        db.update({ _id: req.params.id }, req.body, err => {

            if (err) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json(Object.assign(req.body, req.body))
            }
        }) //rota criada para atualizar informacoes de um usuario
    })

    routeId.delete((req, res) => {
        db.remove({ _id: req.params.id }, {}, err => {
            if (err) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json(req.params)
            }
        })
    })

}