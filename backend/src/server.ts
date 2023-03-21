import express from "express";
import cors from 'cors';

import { loadUser, loadUsers } from "./User";

import { delay } from "./utilities";

var app = express();

app.use(cors());

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/users", async (_, res) => {
  const users = await loadUsers();
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await loadUser(id);

  return !user
    ? res.status(404).send(`No user with id: ${id}`)
    : res.json(user);
});
