const express = require('express');
const userRouter = require('./user.roter');
const carRouter = require('./car.roter');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter);
router.use('/cars', carRouter);

module.exports = router;