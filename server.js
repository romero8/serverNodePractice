const express = require("express");
const app = express();
let todos;

const apiUrl = "https://jsonplaceholder.typicode.com/todos";
async function getTodos() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  todos = data;
}
getTodos();


app.get("/api", (req, res) => {
  res.json({todos});
});

app.listen(3000, () => {
  console.log("listening to port 3000.......");
});
