// Target: 26 Oktober 2026 Jam 00:00:00
const targetDate = new Date("Oct 26, 2026 00:00:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "<h2>HARI INI ULANG TAHUNNYA! 🎉</h2>";
        document.querySelector(".message").innerHTML = "<p>Waktunya buka hadiah utama!</p>";
        // window.location.href = "link-website-utama.html";
    }
}, 1000);

// Logika lucu untuk tombol
let clickCount = 0;
document.getElementById("btnIntip").addEventListener("click", function () {
    clickCount++;

    if (clickCount === 1) {
        alert("Dibilangin sabar! 😜 Tunggu tanggal 26 ya!");
    } else if (clickCount === 2) {
        alert("Ngeyel ya diklik lagi? Kejutannya belum beres! 🛠️");
    } else if (clickCount === 3) {
        alert("Tiga kali klik... Kangen banget ya sampai pengen cepet-cepet? 😆 Sabar!");
    } else {
        alert("Udah ah, tombolnya mau istirahat. Pokoknya tunggu tanggal 26! 💖");
    }
});

// FUNGSI BARU: Animasi Hujan Emoji Melayang
function createParticle() {
    const container = document.getElementById('particles-container');
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Kumpulan emoji yang akan muncul
    const emojis = ['✨', '🎈', '💖', '🤪', '🤭', '🎉', '🌸'];
    particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    // Posisi horizontal acak (dari kiri ke kanan layar)
    particle.style.left = Math.random() * 100 + 'vw';

    // Durasi melayang acak antara 4 sampai 8 detik
    const duration = Math.random() * 4 + 4;
    particle.style.animation = `floatUp ${duration}s linear forwards`;

    // Ukuran emoji acak
    const size = Math.random() * 15 + 15; // Antara 15px sampai 30px
    particle.style.fontSize = `${size}px`;

    container.appendChild(particle);

    // Hapus elemen setelah animasinya selesai agar tidak memberatkan browser
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

// Munculkan 1 emoji setiap 600 milidetik
setInterval(createParticle, 600);