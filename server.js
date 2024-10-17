const express = require("express");
const todosRoutes = require("./todos.routes");

const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/health", (req, res) => {
  return res.json("Server is running");
});

app.listen(3333, () => console.log("Server is running on port 3333"));
