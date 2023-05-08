// Se hace uso de la libreria de express
const express = require('express');
// Se hace uso de la libreria de cors
//const cors = require('cors');
// Se crea la contante app y hace uso de express
const app = express();
// app hace uso de .json de express
app.use(express.json());
// app hace uso de cors
//app.use(cors());
//app.use('/api',require('./ruters/employees'));
app.use('/api', require('./ruters/users'));
// app pone a escuchar al servidor el el puerto )en este caso es el 3000.
app.listen(3000,(err) => {
if (err) {
    console.log('Server error');
}else{
    console.log('Server connected');
}
})




