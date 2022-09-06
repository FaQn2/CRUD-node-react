import express from "express";
import cors from "cors"
//importamos la conexion a la DB
import db from "./database/db.js";
//importamos nuestro enrutador
import blogRoutes from "./routes/routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/blogs", blogRoutes)

try {
    db.authenticate()
    console.log("conexion exitosa la BD")
} catch (error) {
    console.log(`ERROR en la conexion de la DB ${error}`)
}



app.get("/", (req, res) =>{
    res.send("hola mundo")
})


app.listen(8000, ()=>{
    console.log("server UP running in http://localhost:8000/")
})