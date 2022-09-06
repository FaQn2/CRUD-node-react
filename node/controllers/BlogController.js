//importamos el modelo
import BlogModel from "../models/BlogModel.js";

// ****METODOS PARA EL CRUD****

//mostrar todos los registros. SHOW ALL
export const getAllBlogs = async (req, res)=>{
    try {
      const blogs = await BlogModel.findAll()
      res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

//mostrar un registro. READ SHOW 
export const getBlog = async (req, res)=>{
    try {
      const blog = await BlogModel.findAll({
          where:{id:req.params.id}
      })
      res.json(blog[0])
    } catch (error) {
        res.json({message: error.message})
    }
}
//crear un registro. CREATE
export const CreateBlog = async (req, res) =>{
    try {
        await BlogModel.create(req.body)
       res.json({
           "message": "Registro Creado correctamente"
       })
    } catch (error) {
        res.json({message: error.message})
    }
}


//modificar u actualizar un registro. UPDATE

export const UpdateBlog = async (req, res)=>{
    try {
        await BlogModel.update(req.body,{
            where: { id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//eliminar registro. DELETE
export const DeleteBlog = async (req, res)=>{
    try {
       await BlogModel.destroy({
            where: {id : req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}