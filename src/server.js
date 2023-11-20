import express from 'express';
import cors from 'cors';

import system from './system/index.js';

let corsOptions = {
  origin: ['http://localhost:5001']
}

const app = express();
const PORT = process.env.PORT || 5004;

app.use(cors(corsOptions));
app.use(express.json());

app.post('/log', (req, res) => {
  const { log } = req.body;
  console.log('log', log);
  console.log(system);
  console.log(typeof system.set);
  system.set(log);
  res.status(200).json({
    status: 'OK',
  });
});

app.get('/get-logs', (req, res) => {
  const logs = system.get() || '';
  res.send(logs);
});

app.listen(PORT, () => {
  console.log(`Log Server is running on port ${PORT}`);
});
