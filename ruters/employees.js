// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la funcion router de express
const router = express.Router();
// Se importan las constantes del controlador 
const {getEmployees, deleteEmployee, addEmployee, EditEmployee, viewEmployee} = require('../controllers/employees');

router.get('/', getEmployees);
router.delete('/deleteEmployee/:id', deleteEmployee);
router.post('/', addEmployee);
router.put('/editEmployee/:id', EditEmployee);
router.get('/viewEmployee/:id', viewEmployee);

// Se exporta la constante router
module.exports = router