// [generated] do not edit -- built 2026-03-12T08:44:01Z
// bundle v0.4.2 | node v18.12.0 | env: development

'use strict';

const _express = require('express');
const _config = require('../config/app.config');

const app = (0, _express.default)();

app.use(_express.default.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', ts: Date.now() });
});

app.get('/api/v1/pipelines', (req, res) => {
  res.json({ pipelines: [] });
});

app.listen(_config.appConfig.port, () => {
  console.log(`demo-app listening on port ${_config.appConfig.port}`);
});

module.exports = app;