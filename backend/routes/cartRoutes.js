const express = require('express');
const router = express.Router();
const { addToCart, getCart, updateCartItem, removeFromCart } = require('../controllers/cartController');
const authenticate = require('../middleware/JWT')


router.post('/add', authenticate, addToCart);
router.get('/', authenticate, getCart);
router.post('/update', authenticate, updateCartItem);
router.delete('/remove', authenticate, removeFromCart);

module.exports = router;
