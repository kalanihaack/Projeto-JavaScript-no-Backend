const express = require("express") //constante para chamar o servidor via express
let routesIndex = require("./routes/index")
let routesUsers = require("./routes/users")

let app = express()  //chama o servidor http 

app.use(routesIndex)
app.use("/users", routesUsers)

app.listen(3000, "127.0.0.1", () => {
    console.log("servidor rodando")
}) //ouve o servidor e retorna se funcionou