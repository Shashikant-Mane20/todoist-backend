import express from "express";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos); // GET http://localhost:5000/api/todos
router.post("/", createTodo); // POST http://localhost:5000/api/todos
router.put("/:id", updateTodo); // PUT http://localhost:5000/api/todos/:id
router.delete("/:id", deleteTodo); // DELETE http://localhost:5000/api/todos/:id

export default router;
