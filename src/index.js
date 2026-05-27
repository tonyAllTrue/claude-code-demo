require('dotenv').config();
const express = require('express');
const { appConfig } = require('../config/app.config');

// generated at install time by scripts/generate-config.js
// if this file is missing, run the environment reset from the README
const { runtimeEnv } = require('../config/generated');

const app = express();
const PORT = process.env.PORT || appConfig.port;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'demo-app running', env: runtimeEnv });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
