
const { EmployeesSchema } = require('../models/employees');

const getEmployees = (req, res) => {
    EmployeesSchema.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.log('Error ' + error);
        })
};

const deleteEmployee = (req, res) => {
    const data = req.params
    console.log(data);
    EmployeesSchema.destroy({
        where: {
            document_employee: data.id

        }
    })
    .then(result => {
        res.json({status: 'Empleado eliminado'});
    })
    .catch(error => {
        console.log('Error ' + error);
    })

}

const addEmployee = (req, res) => {
    const data =  req.body
    EmployeesSchema.create({
        document_employee: data.document_employee,
        name_employee: data.name_employee,
        last_name_employee: data.last_name_employee,
        email_employee: data.email_employee,
        password_employee: data.password_employee,
        role_employee: data.role_employee
    })

    .then(result => {
        res.json({status: 'Empleado agregado'});
    })
    .catch(error => {
        console.log('Error ' + error);
    })
} 

const EditEmployee = (req, res) => {
    const data =  req.body
    const params = req.params
    EmployeesSchema.update({
        name_employee: data.name_employee,
        last_name_employee: data.last_name_employee,
        email_employee: data.email_employee,
        password_employee: data.password_employee,
        role_employee: data.role_employee
         },{
            where: {
                document_employee: data.document_employee
            }
        })

    .then(result => {
        res.json({status: 'Empleado agregado'});
    })
    .catch(error => {
        console.log('Error ' + error);
    })
} 

const viewEmployee = (req, res)  => {
const data =  req.params
console.log(data);
    EmployeesSchema.findOne({
        where:{
            document_employee: data.id
        }
    })
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        console.log('Error ' + error);
    })
}
// Se exportan las constantes
module.exports = { getEmployees, deleteEmployee, addEmployee, EditEmployee, viewEmployee}