const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'trabajoentregable',
    user: 'root',
    password: '',
});


conexion.connect(function(error){
    if(error){
        throw error;
    }else {
        console.log('connection established')
    }
})

const prueba = conexion.query('SELECT * FROM tb_trabajador', function(error, results, fields){
    if(error)
        throw error;
    
    results.forEach(element => {
        console.log(element)
    });
})
module.exports = prueba

conexion.end();
//