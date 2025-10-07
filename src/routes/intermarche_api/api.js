const express = require('express');
const axios = require('axios');
const router  = express.Router();
 
// Route to fetch all products data from a public API
router.get('/', async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching product data:", error.response?.status, error.response?.data);
    res.status(500).json({ error: "Failed to fetch product data" });
  }
});

// Route to fetch a specific product by ID from a public API
router.get('/:id', async (req, res) => {
  try{
    const productId = req.params.id;
    const response = await axios.get('https://fakestoreapi.com/products/' + productId);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching product data:", error.message);
    res.status(500).json({ error: "Failed to fetch product data" });
  }
});

module.exports = router;