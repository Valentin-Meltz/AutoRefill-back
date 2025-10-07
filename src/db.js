const { Pool } = require('pg');
const env = require('./env.js');

const pool = new Pool({
  host: env.DATABASE_POSTGRES_HOST,
  user: env.DATABASE_POSTGRES_USER,
  password: env.DATABASE_POSTGRES_PASSWORD,
  database: env.DATABASE_POSTGRES_DB,
  port: env.DATABASE_POSTGRES_PORT || 5432,
  // ssl: { rejectUnauthorized: false } // active si ton hébergeur impose SSL (Heroku, Render…)
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
