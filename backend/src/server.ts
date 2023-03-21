import express from 'express';
import cors from 'cors';
import ws from 'express-ws';
import { random, take } from 'lodash/fp';

import { loadUser, loadUsers, saveUser, User } from './User';

import { delay } from './utilities';
import { loadPosts } from './Post';

const { app } = ws(express());

app.use(cors());
app.use(express.json());

app.get('/users', async (_, res) => {

  const users = await loadUsers();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  
  const { id } = req.params;
  const user = await loadUser(id);

  return !user
    ? res.status(404).send(`No user with id: ${id}`)
    : res.json(user);
});

app.post('/users/:id', async (req, res) => {
  const { id } = req.params;
  await saveUser(id, req.body as User);
  return res.status(200).end();
});

app.get('/posts', async (_, res) => {
  const posts = await loadPosts();
  res.json(take(10,posts));
});

app.ws('/posts', function (ws, req) {

  const run = async () => {
    const posts = await loadPosts();
    const i = random(0, posts.length - 1);
    ws.send(JSON.stringify(posts[i]));
  };

  const loop = () => {
    var rand = random(2000, 3000);
    setTimeout(function () {
      run();
      loop();
    }, rand);
  };

  loop();
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
