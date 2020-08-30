const express = require('express');
const multer = require('multer')

const UserController = require('./controllers/UserController');
const WineController = require('./controllers/WineController')
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig)


routes.get('/status', (req, res) => {
  res.send({
    status: 200,
  });
});


//User
routes.post('/user/register', UserController.createUser);
routes.get('/user/:userId', UserController.getUserById);

//Wine
routes.post('/wine', upload.single("thumbnail"), WineController.createWine)
routes.get('/wine/:wineId', WineController.getWineById)


module.exports = routes;
