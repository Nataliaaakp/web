// Simpan kata sandi yang benar dalam variabel
const correctPassword = "20102022"; // Ganti dengan kata sandi yang Anda inginkan

// Ambil elemen-elemen yang diperlukan
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

// Tambahkan event listener untuk tombol masuk
loginButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
    
    // Periksa apakah kata sandi yang dimasukkan benar
    if (enteredPassword === correctPassword) {
        // Redirect ke halaman galeri jika kata sandi benar
        window.location.href = "index.html"; // Ganti dengan nama file halaman galeri
    } else {
        alert("Kata sandi salah. Coba lagi.");
    }
});
