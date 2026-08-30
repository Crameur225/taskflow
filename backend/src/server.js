const express = require('express');
const app = express();
app.use(express.json());

let tasks = [{ id: 1, title: 'Apprendre Docker', done: false }];

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/tasks', (req, res) => res.json(tasks));
app.post('/api/tasks', (req, res) => {
  const task = { id: Date.now(), title: req.body.title, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API sur le port ${PORT}`));

module.exports = app;