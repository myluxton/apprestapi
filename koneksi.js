var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host: '202.52.146.108',
    user: 'matarian_devel',
    password: '',
    database: 'matarian_unit'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('MySql terkoneksi');
});

module.exports = conn;