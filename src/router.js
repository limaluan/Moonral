const express = require('express');
const route = express.Router();
const postController = require('./controllers/postController')

route.get('/', postController.create);
route.post('/', postController.save);
route.post('/delete/:id', postController.delete);

module.exports = route;