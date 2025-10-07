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

// get user by logs
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ error: 'email et password sont requis' });
    }
    
    const { rows } = await db.query('SELECT * FROM "User" WHERE email = $1 AND password = $2', [email, password]);
    
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }
    return res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});

// get user by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM "User" WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Utilisateur introuvable' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching user by id:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

module.exports = router;