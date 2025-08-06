// Fungis untuk menambahkan angka/operator ke tampilan kalkulator
function appendValue(value) {
    document.getElementById("display").value += value;
}

//Fungsi untuk menghapus semua isi tampilan kalkulator
function clearDisplay() {
    // Mengosongkan isi dari Display
    document.getElementById("display").value = "";
}
// Fungsi untuk menghapus satu karakter di tampilan
function deletedLast() {
// Ambil isi saat ini, lalu potong 1 karakter dari belakang
const curent = document.getElementById("display").value;
document.getElementById("display").value =curent.slice(0, -1);
}

// Fungsi untuk menghitung hasil ekspresi matematika
function calculate() {
    try {
        // Evaluasi string matematika dan tampilankan hasilnya input display
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (eror) {
        // Jika terjadi error (seperti sintaks salah),  maka tampilkan pesan error
        document.getElementById("display").value = "Error";
    }
}