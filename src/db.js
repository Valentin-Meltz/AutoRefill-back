const { Pool } = require('pg');
const env = require('./env.js');

const pool = new Pool({
  connectionString: env.DATABASE_POSTGRES_URL,
  // ssl: { rejectUnauthorized: false } // active si ton hébergeur impose SSL (Heroku, Render…)
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

