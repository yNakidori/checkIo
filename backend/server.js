const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// CRUD - Create
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({ data: { name, email } });
  res.json(user);
});

// Read
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Upadate
app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email },
  });
  res.json;
});

// Delete
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({ where: { id: Number(id) } });
  res.sendStatus(204);
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
