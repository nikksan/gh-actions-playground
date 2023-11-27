import express from 'express';
import config from './config';

const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World!')
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
});

export default app;
