'use strict';

exports.ok = function(values, res) {
    var data = {
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
};

//response untuk nested
exports.oknested = function(values, res) {
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item) => {
        //tentukan key group
        if (akumulasikan[item.namatoko]) {
            //buat variabel group namatoko
            const nomor = akumulasikan[item.namatoko];
            //cek jika isi array adalah
            if (Array.isArray(group.nomorbon)) {
                //tambahkan value ke dalam group nomorbon
                group.nomorbon.push(item.nomorbon);
            } else {
                group.nomorbon = [group.nomorbon, item.nomorbon];
            }
        } else {
            akumulasikan[item.namatoko] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil
    };

    res.json(data);
    res.end();
}