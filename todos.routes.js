const express = require("express");

const allTodos = [{ nome: "aaaa", status: false }];
const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Create
todosRoutes.post("/todos", async (request, response) => {
  const { name } = request.body;
  const todo = await prisma.todo.create({
    data: {
      name,
    },
  });
  return response.status(201).json(todo);
});
// Read
todosRoutes.get("/todos", (request, response) => {
  return response.status(200).json(allTodos);
});
// Update
// Delete

module.exports = todosRoutes;
