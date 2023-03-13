const path = require('path');
const express = require('express');
const productsRoutes = require('../routers/products/products.routes')
const cartsRoutes = require('../routers/carts/carts.routes')
const authRoutes = require('../routers/auth/auth.routes')
// const usersRoutes = require('../routers/users/users.routes');

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/carts', cartsRoutes);
router.use('/auth', authRoutes);

router.get('/', async (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../client/public/index.html'))
})
router.get('/auth/register', async (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../client/public/register.html'))
})
router.get('/auth/login', async (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../client/public/login.html'))
})
module.exports= router