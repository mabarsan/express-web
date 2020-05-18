const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper/helper');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Manuel'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${ port }`);
})