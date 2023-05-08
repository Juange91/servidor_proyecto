// Se hace uso del esquema de users.
const { UserSchema } = require('../models/users');
// Se crea una constante la cual recibe una peticion de tipo get donde enviara los datos del usuario 
// de la tabla agents segun el documento y tipo de documento.
const getUsers = (req, res) => {
    const data = req.params
    console.log(data);
    UserSchema.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log('Error ' + error);
        })
};

// Se exportan las constantes
module.exports = { getUsers}