// Mendapatkan elemen-elemen DOM
const inputElement = document.getElementById("inputElement");
const importButton = document.getElementById("importButton");
const outputElement = document.getElementById("outputElement");

// Menambahkan event listener ke tombol "Impor Teks"
importButton.addEventListener("click", function () {
    // Mengambil nilai dari input
    const importedText = inputElement.value;
    
    // Menyimpan nilai yang diimpor ke elemen output
    outputElement.textContent = importedText;
});
