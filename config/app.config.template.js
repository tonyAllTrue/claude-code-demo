// project config template -- copied to app.config.js by npm run setup

const appConfig = {
  port: parseInt(process.env.PORT, 10) || 3000,
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    name: process.env.DB_NAME || 'demo_db'
  },
  apiKey: process.env.API_KEY || null,
  jwtSecret: process.env.JWT_SECRET || null
};

module.exports = { appConfig };