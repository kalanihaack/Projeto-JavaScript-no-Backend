module.exports = {
    user: (app, req, res) => {

        req.assert("name", "O nome é obrigatorio").notEmpty() //o campo de nome nao pode estar vazio
        req.assert("email", "O email é obrigatorio").notEmpty().isEmail()//o campo de email tem que estar preenchido e com email valido

        let errors = req.validationErrors() 

        if (errors) {
            app.utils.error.send(errors, req, res) 
            return false
        } else {
            return true
        }
    }
}