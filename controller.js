'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi Rest API Berjalan!", res)
};

//menampilkan semua data
exports.tampilSemua = function(req, res) {
    connection.query('SELECT * FROM tbl_accdbrg', function(error, rows, fields) {
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
    connection.query('SELECT * FROM tbl_accdbrg WHERE id = ?', [id],
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

//menampilkan nomor bon group
exports.tampilbon = function(req, res) {
    connection.query('SELECT tbl_accarbon.nomor_bon, tbl_accarbon.tanggal_bon, tbl_accarbon.kode_langganan, tbl_accdlgn.nama_toko, tbl_accarbon.kode_barang, tbl_accdbrg.nama_barang, tbl_accarbon.banyak_barang, tbl_accdbrg.satuan, tbl_accarbon.harga_barang FROM tbl_accarbon JOIN tbl_accdlgn JOIN tbl_accdbrg WHERE tbl_accarbon.kode_langganan = tbl_accdlgn.kode_langganan AND tbl_accarbon.kode_barang = tbl_accdbrg.kode_barang ORDER BY tbl_accarbon.nomor_bon ASC ',
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    );

};

exports.tampilPilih = function(req, res) {
    connection.query('SELECT tbl_accarbon.nomor_bon, tbl_accarbon.tanggal_bon, tbl_accarbon.kode_langganan, tbl_accdlgn.nama_toko, tbl_accarbon.kode_barang, tbl_accdbrg.nama_barang, tbl_accarbon.banyak_barang, tbl_accdbrg.satuan, tbl_accarbon.harga_barang, tbl_accarbon.banyak_barang*tbl_accarbon.harga_barang AS Total FROM tbl_accarbon JOIN tbl_accdlgn JOIN tbl_accdbrg WHERE tbl_accarbon.kode_langganan = tbl_accdlgn.kode_langganan AND tbl_accarbon.kode_barang = tbl_accdbrg.kode_barang ORDER BY tbl_accarbon.nomor_bon ASC ',
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res)
            }
        });
};