const mysql =  require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'market-place'
})

conexion.connect((error)=>{
    if (error) {
        console.error(error)
    } else {
        console.log('BD Conection success...')
    }
})

module.exports = conexion