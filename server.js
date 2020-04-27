const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000; //cambio necesario para heroku

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

//EXPRESS HBS
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Fernando',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about'

        , {
            anio: new Date().getFullYear()
        }
    );
});
/*
app.get('/data', (req, res) => {

    res.send('Hola Mundo');
});*/

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});