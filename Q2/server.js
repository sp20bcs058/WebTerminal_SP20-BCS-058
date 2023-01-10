const express = require("express");
const app = express();
app.use(express.json());

const todos = [
  { todo: "Task 1", done: false },
  { todo: "Task 2", done: true },
  { todo: "Task 3", done: false },
];

app.get("/", (req, res) => {
  res.send("TODOS APP");
});

app.get("/api/todos", (req, res) => {
  if (!todos) res.status(400).send("There is NO Todos");
  res.send(todos);
});

app.get("/api/myTodosList/:index", (req, res) => {
  if (!todos[req.params.index])
    return res.status(400).send("EMPTY");
  res.send(todos[req.params.index]);
});

app.put("/api/myTodosList/:index", (req, res) => {
  const todo = ({ todo, done } = req.body);
  todos[req.params.index] = todo;
  todos[req.params.index] = res.send(todos[req.params.index]);
});

app.delete("/api/myTodosList/:index", (req, res) => {
  todos.splice(req.params.index, 1);
  res.send(todos);
});

app.post("/api/myTodosList/", (req, res) => {
  todos.push(req.body);
  res.send(todos);
});

app.listen(2000);
