const express = require('express');
const cors = require('cors');
const env = require('./env.js');

const app = express();

app.use(cors());             
app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

const port = env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
