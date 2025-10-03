const express = require('express');
const router  = express.Router();
const db = require('../../db');

// create user
router.post('/create', async (req, res) => {
  const { email, lastName, firstName, address, postalCode, city, phone, password } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO "User" ("lastName", "firstName", "address", "postalCode", "city", "phone", "password", "role", "email") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
      [lastName, firstName, address, postalCode, city, phone, password, 'user', email]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la création' });
  }
});

router.get('/', (req, res) => {
  res.send('User route is working!');
});

module.exports = router;