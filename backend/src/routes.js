const express = require('express');
const multer = require('multer')

const UserController = require('./controllers/UserController');
const WineController = require('./controllers/WineController')
const DashboardController = require('./controllers/DashboardController')
const LoginController = require('./controllers/LoginController')
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

//Login
routes.post('/login', LoginController.store)

//Dashboard
routes.get('/wines', DashboardController.getAllWines)
routes.get('/wines/:wineType', DashboardController.getAllWines)
routes.get('/wine/:wineId', DashboardController.getWineById)

//Wine
routes.post('/wine', upload.single("thumbnail"), WineController.createWine)
routes.delete('/wine/:wineId', WineController.delete)


module.exports = routes;
