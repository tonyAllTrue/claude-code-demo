require('dotenv').config();
const express = require('express');
const { appConfig } = require('../config/app.config');

const app = express();
const PORT = process.env.PORT || appConfig.port;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Demo app running', env: appConfig.env });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
