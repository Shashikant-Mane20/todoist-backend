import Todo from "../models/Todo.js";

// @desc Get all todos
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// @desc Create new todo
export const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const todo = new Todo({ title, description });
  const saved = await todo.save();
  res.json(saved);
};

// @desc Update todo
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// @desc Delete todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted" });
};
