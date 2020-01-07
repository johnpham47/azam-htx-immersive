const express = require("express");
const app = express();
const cors = require("cors");
const Todo = require("./models/todo");

let todolist = [];

app.use(express.json());

// Use cors middleware
app.use(cors());

// POST
app.post("/todo", (req, res) => {
  let todo = new Todo(req.body.title, req.body.priority);

  console.log(req.body);
  todolist.push(req.body);
  res.send(todolist);
});
// GET
app.get("/todo", (req, res) => {
  res.json(todolist);
  console.log(todoList);
});

// HTTP METHOD = DELETE
// app.delete

//   start the server
app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
