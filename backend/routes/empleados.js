var express = require('express');
const pool = require('../model/db');
var router = express.Router();

/* GET empleados listing. */
router.get('/', function(req, res, next) {
	pool.query("select * from empleados")
	.then(response => res.send(response))
	.catch(error => res.status(500).send({message: "Error al obtener empleados."}))
});

module.exports = router;
