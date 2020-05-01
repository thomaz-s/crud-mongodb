const express = require('express');
const mongoose = require('mongoose');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();
const Product = mongoose.model('Product');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;