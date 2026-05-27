const appConfig = {
  port: parseInt(process.env.PORT, 10) || 3000,
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    name: process.env.DB_NAME || 'demo_db',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD,
  },
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = { appConfig };
