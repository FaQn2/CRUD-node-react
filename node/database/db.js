//sequelize para mysql.     mongoose para mongodb
//creamos la conexion a la bd
import {Sequelize} from "sequelize"
                  // el nombre de la bd, el SV y la pass
const db = new Sequelize("database_app", "root","",{
    host:"localhost",
    dialect: "mysql"
})
//exportamos la base de datos
export default db