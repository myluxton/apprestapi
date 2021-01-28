'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemua);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    app.route('/tambah')
        .posh(jsonku.tambahData);

    app.route('/rubah')
        .put(jsonku.rubahData);

    app.route('/hapus')
        .delete(jsonku.hapusData);
}