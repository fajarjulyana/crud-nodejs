const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Koneksi ke MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddb'
});

// Koneksikan ke database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Terhubung ke database MySQL');
});

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route untuk halaman utama
app.get('/', (req, res) => {
    let sql = 'SELECT * FROM data';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('index', {
            result: result
        });
    });
});

// Route untuk tambah data
app.post('/tambah', (req, res) => {
    let data = { nama: req.body.nama, alamat: req.body.alamat };
    let sql = 'INSERT INTO data SET ?';
    db.query(sql, data, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Route untuk edit data
app.post('/edit', (req, res) => {
    let sql = `UPDATE data SET nama='${req.body.nama}', alamat='${req.body.alamat}' WHERE id=${req.body.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Route untuk hapus data
app.post('/hapus', (req, res) => {
    let sql = `DELETE FROM data WHERE id=${req.body.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Jalankan server
const port = 3000;
app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});
