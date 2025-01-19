// script.js
function showKelurahanInfo(kelurahan) {
    var kelurahanInfo = {
        'KelurahanPaburan': {
            nama: 'KELURAHAN PABUARAN',
            foto: 'kelurahanPaburan.jpg',
            info: 'Informasi tentang KELURAHAN PABUARAN.',
            pemimpin: 'Nama Pemimpin Kelurahan Paburan',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Paburan'
        },
        'KelurahanSukahati': {
            nama: 'KELURAHAN SUKAHATI',
            foto: 'kelurahanSukahati.jpg',
            info: 'Informasi tentang KELURAHAN SUKAHATI.',
            pemimpin: 'Nama Pemimpin Kelurahan Sukahati',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Sukahati'
        },
        'KelurahanNanggewer': {
            nama: 'KELURAHAN NANGGEWER',
            foto: 'kelurahanNanggewer.jpg',
            info: 'Informasi tentang KELURAHAN NANGGEWER.',
            pemimpin: 'Nama Pemimpin Kelurahan Nanggewer',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Nanggewer'
        },
        'KelurahanCiriung': {
            nama: 'KELURAHAN CIRIUNG',
            foto: 'kelurahanCiriung.jpg',
            info: 'Informasi tentang KELURAHAN CIRIUNG.',
            pemimpin: 'Nama Pemimpin Kelurahan Ciriung',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Ciriung'
        },
        'KelurahanCirimekar': {
            nama: 'KELURAHAN CIRIMEKAR',
            foto: 'kelurahanCirimekar.jpg',
            info: 'Informasi tentang KELURAHAN CIRIMEKAR.',
            pemimpin: 'Nama Pemimpin Kelurahan Cirimekar',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Cirimekar'
        },
        'KelurahanPaburanMekar': {
            nama: 'KELURAHAN PABUARAN MEKAR',
            foto: 'kelurahanPaburanMekar.jpg',
            info: 'Informasi tentang KELURAHAN PABUARAN MEKAR.',
            pemimpin: 'Nama Pemimpin Kelurahan Paburan Mekar',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Paburan Mekar'
        },
        'KelurahanCibinong': {
            nama: 'KELURAHAN CIBINONG',
            foto: 'kelurahanCibinong.jpg',
            info: 'Informasi tentang KELURAHAN CIBINONG.',
            pemimpin: 'Nama Pemimpin Kelurahan Cibinong',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Cibinong'
        },
        'KelurahanTengah': {
            nama: 'KELURAHAN TENGAH',
            foto: 'kelurahanTengah.jpg',
            info: 'Informasi tentang KELURAHAN TENGAH.',
            pemimpin: 'Nama Pemimpin Kelurahan Tengah',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Tengah'
        },
        'KelurahanPaburanMekar2': {
            nama: 'KELURAHAN PABUARAN MEKAR',
            foto: 'kelurahanPaburanMekar2.jpg',
            info: 'Informasi tentang KELURAHAN PABUARAN MEKAR.',
            pemimpin: 'Nama Pemimpin Kelurahan Paburan Mekar',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Paburan Mekar'
        },
        'KelurahanPondokRajeg': {
            nama: 'KELURAHAN PONDOK RAJEG',
            foto: 'kelurahanPondokRajeg.jpg',
            info: 'Informasi tentang KELURAHAN PONDOK RAJEG.',
            pemimpin: 'Nama Pemimpin Kelurahan Pondok Rajeg',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Pondok Rajeg'
        },
        'KelurahanHarapanJaya': {
            nama: 'KELURAHAN HARAPAN JAYA',
            foto: 'kelurahanHarapanJaya.jpg',
            info: 'Informasi tentang KELURAHAN HARAPAN JAYA.',
            pemimpin: 'Nama Pemimpin Kelurahan Harapan Jaya',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Harapan Jaya'
        },
        'KelurahanNanggewerMekar': {
            nama: 'KELURAHAN NANGGEWER MEKAR',
            foto: 'kelurahanNanggewerMekar.jpg',
            info: 'Informasi tentang KELURAHAN NANGGEWER MEKAR.',
            pemimpin: 'Nama Pemimpin Kelurahan Nanggewer Mekar',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Nanggewer Mekar'
        },
        'KelurahanPakanSari': {
            nama: 'KELURAHAN PAKAN SARI',
            foto: 'kelurahanPakanSar.jpg',
            info: 'Informasi tentang KELURAHAN PAKAN SARI.',
            pemimpin: 'Nama Pemimpin Kelurahan Pakan Sari',
            kontakPemimpin: 'Kontak Pemimpin Kelurahan Pakan Sari'
        }
    };

    var selectedKelurahan = kelurahanInfo[kelurahan];

    var kelurahanInfoDiv = document.getElementById('kelurahan-info');
    kelurahanInfoDiv.innerHTML = `
        <h3>${selectedKelurahan.nama}</h3>
        <img src="${selectedKelurahan.foto}" alt="Foto ${selectedKelurahan.nama}">
        <p>${selectedKelurahan.info}</p>
        <h4>Pemimpin PAR</h4>
        <p>${selectedKelurahan.pemimpin}</p>
        <p>${selectedKelurahan.kontakPemimpin}</p>
    `;
}
