'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi Rest API Berjalan!", res)
};

//menampilkan semua data
exports.tampilSemua = function(req, res) {
    connection.query('SELECT * FROM tbl_user', function(error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};