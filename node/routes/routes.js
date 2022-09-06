import express from "express"
import { CreateBlog, DeleteBlog, getAllBlogs, getBlog, UpdateBlog } from "../controllers/BlogController.js"
const router = express.Router()

router.get("/",getAllBlogs)
router.get("/:id", getBlog)
router.post("/", CreateBlog)
router.put("/:id", UpdateBlog)
router.delete("/:id", DeleteBlog)

export default router