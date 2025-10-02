const express = require('express');
const env = require('./env.js');

const app = express();

// Middleware
app.use(express.json());

// Example health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'AutoRefill API' });
});

// Mount routes if you want to modularize
try {
  const routes = require('./routes');
  app.use(env.API_PREFIX || '/v1', routes);
} catch (e) {
  // no routes/index.js yet
}

const port = env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
