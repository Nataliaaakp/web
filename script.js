// Ambil semua elemen galeri
const galleryItems = document.querySelectorAll('.gallery-item');

// Tambahkan event listener untuk setiap elemen galeri
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Cek apakah elemen adalah gambar atau video
        const mediaElement = item.querySelector('img') || item.querySelector('video');

        // Ambil sumber media dari elemen yang di-klik
        const mediaSrc = mediaElement.getAttribute('src');

        // Buat elemen modal untuk menampilkan media
        const modal = document.createElement('div');
        modal.classList.add('modal');

        // Buat elemen media sesuai dengan jenisnya
        let media;
        if (mediaElement.tagName === 'IMG') {
            media = document.createElement('img');
        } else if (mediaElement.tagName === 'VIDEO') {
            media = document.createElement('video');
            media.setAttribute('controls', '');
        }

        media.setAttribute('src', mediaSrc);

        // Tambahkan elemen media ke dalam modal
        modal.appendChild(media);
        document.body.appendChild(modal);

        // Tambahkan event listener untuk menutup modal
        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// Ambil tombol "Masuk" dan galeri
const enterGalleryButton = document.querySelector('.enter-gallery');
const gallery = document.querySelector('.gallery');

// Tambahkan event listener untuk tombol "Masuk"
enterGalleryButton.addEventListener('click', () => {
    // Tambahkan kelas 'open' ke galeri untuk menampilkannya
    gallery.classList.add('open');
});

// Tambahkan event listener untuk menutup galeri saat galeri diklik
gallery.addEventListener('click', () => {
    // Hanya tutup galeri jika kelas 'open' ada
    if (gallery.classList.contains('open')) {
        gallery.classList.remove('open');
    }
});
