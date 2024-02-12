# Aplikasi CRUD MySQL dengan Node.js, EJS, Express, dan Bootstrap

Aplikasi ini adalah contoh implementasi operasi CRUD (Create, Read, Update, Delete) menggunakan MySQL sebagai basis data, Node.js sebagai platform server, Express sebagai framework aplikasi web, EJS sebagai mesin template, dan Bootstrap untuk gaya tampilan.

## Instalasi

1. Pastikan Anda telah menginstal Node.js dan MySQL di sistem Anda.
2. Clone repositori ini atau unduh dan ekstrak arsipnya.

```
git clone <link-repositori>
```

3. Masuk ke direktori aplikasi:

```
cd nama-folder-aplikasi
```

4. Instal dependensi dengan menjalankan perintah:

```
npm install
```

5. Pastikan MySQL server berjalan di mesin Anda. Buatlah database baru dengan nama `cruddb` dan jalankan skrip SQL berikut:

```sql
CREATE DATABASE IF NOT EXISTS cruddb;

USE cruddb;

CREATE TABLE IF NOT EXISTS data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    alamat VARCHAR(255) NOT NULL
);
```

Pastikan pengaturan koneksi database pada file `app.js` telah disesuaikan dengan konfigurasi MySQL Anda.

## Penggunaan

1. Jalankan aplikasi dengan perintah:

```
node app.js
```

2. Buka browser dan akses `http://localhost:3000` untuk melihat aplikasi CRUD.

## Fitur

- Tambah data baru dengan nama dan alamat.
- Edit data yang sudah ada.
- Hapus data yang sudah ada.

## Teknologi yang Digunakan

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- MySQL
- Bootstrap

## Kontribusi

Jika Anda menemukan bug atau ingin menambah fitur baru, silakan buat *pull request*.

## Lisensi

