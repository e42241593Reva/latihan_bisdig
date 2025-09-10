function jalankanNative() {
    alert("Selamat Datang! Ingat, setiap hari adalah peluang baru untuk sukses()");

    var yakin = confirm("Apakah kamu siap mengambil langkah pertama menuju impianmu?");
    if (yakin) {
        alert("Mantap! Semangatmu adalah kunci menuju keberhasilan()");
    } else {
        alert("Tidak apa-apa. Ambil waktu sejenak, lalu bangkit kembali.()");
    }

    var nama = prompt("Tuliskan Nama Kamu:");
    alert("Hai " + nama + "! ingat jangan pernah menyerah pada impianmu()");

    var now = new Date();
    alert("Saat ini: " + now + "Gunakan waktu sebaik mungkiin untuk berkembang!");

    var angka = parseInt("123");
    alert("Setiap langkah kecil itu berarti, bahkan angka '123' pun bisa jadi bermakna" + angka);

    setTimeout(function () {
        alert("3 detik berlalu.....Ayo, " + nama +", mulai langkahmu sekarang juga!");
    }, 3000);
}

// Custom functions
function foo() {
    alert("Motivasi hari ini: Fokus pada proses, bukan hanya hasil");
}

function alertArraySize(arr) {
    alert("Kamu sudah membuat " + arr.length + " langkah berarti menuju impianmu");
}

function jalankanCustom() {
    foo();

    var test = [1, 2, 3, 4, 5];
    alertArraySize(test);
}
