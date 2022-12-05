const express = require("express"); // Requiero express
const app = express(); // Ejecuto express
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    /* let saludo = "Hola " + req.query.user */
    let saludo = "<h1> Hola mundo </h1>"
    return res.send(saludo)
})

app.get("/contacto", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/contacto.html"))
})

app.get("/nosotros", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/nosotros.html"))
})


app.listen(3000, () => console.log("El servidor está escuchando en el puerto 3000"))