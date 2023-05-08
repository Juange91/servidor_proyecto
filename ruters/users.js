// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la funcion router de express
const router = express.Router();
// Se importan las constantes del controlador 
const {getUsers} = require('../controllers/users');
// Peticion get se obtiene un usuario con su id y su tipo de documento, se obtienen como parametros el id del usuario
// y el tipo de documento
router.get('/',getUsers);
// Se exporta la constante router
module.exports = router