// Se importa para los tipos de datos para los campos de la tabla users
const  DataTypes = require('sequelize');
// Se realiza el llamado del la conexión a la base de datos
const sequelize = require("../data_base/mysql");
// Se definen los campos de la tabla users con sus tipos de datos
const EmployeesSchema= sequelize.define(
    'employees', {
    document_employee: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name_employee: {
        type: DataTypes.STRING
    },
    last_name_employee: {
        type: DataTypes.STRING
    },
    email_employee: {
        type: DataTypes.STRING
    },
    password_employee: {
        type: DataTypes.STRING
    },
    role_employee: {
        type: DataTypes.STRING
    },
},
    {
        timestamps: true
    }
);

module.exports = { EmployeesSchema }




