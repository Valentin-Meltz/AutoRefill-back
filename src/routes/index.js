const express = require('express');
const router  = express.Router();

const intermarcheApi = require('./intermarche_api/api');
const userRoutes = require('./database/user');

router.get('/', (req, res) => {
  res.send('Ça marche !');
});

router.use('/intermarche', intermarcheApi);
router.use('/user', userRoutes);

module.exports = router;