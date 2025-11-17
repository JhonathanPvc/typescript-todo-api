import express from 'express';

const app = express();

app.use(express.json());

app.get('/server-status', (req, res) => {
  res.send('Tudo bem! O servidor está funcionando.');
});

export default app;