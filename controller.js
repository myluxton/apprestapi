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
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data berdasarkan ID
exports.tampilberdasarkanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM tbl_user WHERE id = ?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};

//menambahkan data
exports.tambahData = function(req, res) {
    var username = req.body.username;
    var fullname = req.body.fullname;
    var nomor_telepon = req.body.nomor_telepon;
    var email = req.body.email;

    connection.query('INSERT INTO tbl_user (username,fullname,nomor_telepon,email) VALUE(?,?,?,?)', [username, fullname, nomor_telepon, email],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        }
    );
};

//mengubah data berdasarkan id
exports.rubahData = function(req, res) {
    var id = req.body.id;
    var username = req.body.username;
    var fullname = req.body.fullname;
    var nomor_telepon = req.body.nomor_telepon;
    var email = req.body.email;

    connection.query('UPDATE tbl_user SET username=?,fullname=?,nomor_telepon=?,email=? WHERE id=?', [id, username, fullname, nomor_telepon, email],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Merubah Data!", res)
            }
        }
    );
};

//menghapus data berdasarkan id
exports.hapusData = function(req, res) {
    var id = req.body.id;
    connection.query('DELETE FROM tbl_user WHERE id=?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menghapus Data!", res)
            }
        }
    );

};