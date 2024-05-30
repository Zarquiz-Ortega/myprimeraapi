const { getAll, create, getOne, destroy } = require('../controllers/car.controllers');
const express = require('express');

const carRouter = express.Router();

//! Rutas esticas
carRouter.route("/")
	.get(getAll)
	.post(create)

//! Rutas dinamicas
carRouter.route("/:id")
	.get(getOne)
	.delete(destroy)

module.exports = carRouter;