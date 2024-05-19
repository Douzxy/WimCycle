document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const search = document.getElementById("search-input");
  const svgsearch = document.getElementById("svgsearch");
  const searchWhite = document.getElementsByClassName("search-white");
  const searchPrimary = document.getElementsByClassName("search-primary");
  const searchButton = document.getElementById("search-button");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    search.classList.add("bg-[#ffb71b]");
    search.classList.remove("hover:bg-[#FFB71B]");
    search.classList.add("placeholder-[#002856]");
    search.classList.remove("placeholder-white");

    searchWhite.classList.add("hidden");
    searchPrimary.classList.remove("hidden");
  } else {
    header.classList.remove("scrolled");
    search.classList.add("bg-[#002856]");
    search.classList.add("hover:bg-[#FFB71B]");

    searchWhite.classList.remove("hidden");
    searchPrimary.classList.add("hidden");
  }
});

// Event listener untuk mengubah warna fill SVG saat di hover
svgsearch.addEventListener("mouseenter", function () {
  if (window.scrollY > 0) {
    svgsearch.style.fill = "#fff"; // Jika sudah di-scroll
  } else {
    svgsearch.style.fill = "#002856"; // Jika belum di-scroll
  }
});

// Event listener untuk mengembalikan warna fill SVG saat mouse meninggalkan
svgsearch.addEventListener("mouseleave", function () {
  if (window.scrollY > 0) {
    svgsearch.style.fill = "#fff"; // Jika sudah di-scroll
  } else {
    svgsearch.style.fill = "#002856"; // Jika belum di-scroll
  }
});

var searchButton = document.getElementById("search-button");

// Mendapatkan elemen input pencarian
var searchInput = document.getElementById("search-input");
var searchPrimary = document.getElementsByClassName("search-primary");
var searchWhite = document.getElementsByClassName("search-white");

// Menambah event listener untuk menangkap klik pada tombol pencarian
searchButton.addEventListener("click", function () {
  // Memeriksa apakah tombol memiliki kelas "initial-state"
  if (this.classList.contains("initial-state")) {
    // Jika ya, hapus kelas "initial-state" dan tambahkan kelas "absolute"
    this.classList.remove("initial-state");
    this.classList.add("absolute");

    // Menghapus kelas "hidden" pada input pencarian
    searchInput.classList.remove("hidden");
  } else {
    // Jika tidak, tambahkan kelas "initial-state" dan hapus kelas "absolute"
    this.classList.add("initial-state");
    this.classList.remove("absolute");

    // Menambahkan kelas "hidden" pada input pencarian
    searchInput.classList.add("hidden");
  }
});

searchButton.addEventListener("mouseenter", function () {
  // Mengecek jika elemen dengan kelas "searchPrimary" tidak memiliki kelas "hidden"
  if (!searchPrimary[0].classList.contains("hidden")) {
    // Menambahkan kelas "hidden" pada elemen dengan kelas "searchPrimary"
    for (var i = 0; i < searchPrimary.length; i++) {
      searchPrimary[i].classList.add("hidden");
    }
    // Menghapus kelas "hidden" dari elemen dengan kelas "searchWhite"
    for (var i = 0; i < searchWhite.length; i++) {
      searchWhite[i].classList.remove("hidden");
    }
  }
});

// Menambah event listener untuk menangkap peristiwa keluar hover pada tombol pencarian
searchButton.addEventListener("mouseleave", function () {
  // Mengecek jika elemen dengan kelas "searchWhite" tidak memiliki kelas "hidden"
  if (!searchWhite[0].classList.contains("hidden")) {
    // Menghapus kelas "hidden" dari elemen dengan kelas "searchWhite"
    for (var i = 0; i < searchWhite.length; i++) {
      searchWhite[i].classList.add("hidden");
    }
    // Menambahkan kelas "hidden" pada elemen dengan kelas "searchPrimary"
    for (var i = 0; i < searchPrimary.length; i++) {
      searchPrimary[i].classList.remove("hidden");
    }
  }
});

// Animation Gsap
const text = "MX Big Foot Road 20"; // Teks yang akan dijadikan animasi mengetik
const typingText = document.getElementById("typingText");
const typingDelay = 150; // Delay untuk efek mengetik (dalam milidetik)

function typeText(index) {
  if (index === text.length) {
    setTimeout(deleteText, 1000); // Setelah mengetik selesai, mulai menghapus
    return;
  }
  typingText.textContent += text[index];
  setTimeout(() => typeText(index + 1), typingDelay); // Tambahkan delay untuk efek mengetik
}

function deleteText() {
  if (typingText.textContent.length === 0) {
    setTimeout(startOver, 150); // Setelah penghapusan selesai, mulai dari awal dengan delay 0.5 detik

    return;
  }
  typingText.textContent = typingText.textContent.slice(0, -1);
  setTimeout(deleteText, 100); // Tambahkan delay untuk efek penghapusan
}

function startOver() {
  typingText.textContent = ""; // Setel teks ke kosong

  setTimeout(() => typeText(0), 150); // Mulai mengetik kembali setelah delay 0.5 detik
}

typeText(0); // Memulai animasi mengetik


