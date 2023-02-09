const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

const dataContact = [{
    nama: "Rifqi Subagja",
    mobile: "082116620263"
}, {
    nama: "Krisna",
    mobile: "082116630350"
}]


// memanggil ejs atau menggunakan ejs sebagai view engine
app.set('view engine', 'ejs')

// menggunakan express-ejs-layouts
app.use(expressLayouts)
app.set('layout', './layout/mainLayout')

// "{root: __dirname}" client akan ngebaca berdasarkan lokasi file pada server
app.get('/', (req, res) => {
    res.render('index', {
        pageName: 'Home'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        pageName: 'About Page'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        // melempar data kontak dan disimpan pada array contact
        contact: dataContact,
        pageName: 'Contact Page'
    })
})

// menampilkan data berdasarkan product ID dan query category ID
app.get('/product/:productId/', (req, res) => {
    res.send(`Product ID: ${req.params.productId} <br> Category ID: ${req.query.category}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})