const express = require('express');
const env = require('./env.js');

const app = express();

const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

const port = env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} and ready to use !`);
});
