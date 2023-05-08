const conexion = require('../data_base/mysql')
const getUsers = (req, res) => {
    let sql = 'select * from users'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err; 
          
        else{
            res.json(rows)

        }
    }
    )
};

// Se exportan las constantes
module.exports = { getUsers}