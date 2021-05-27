const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

//configuración
//especifico el puerto de la app, si hay variable de entorno definida la utiliza, si no --> 3000
app.set('port', process.env.PORT || 3000);

//especifica la ruta donde encontrar los archivos de vistas 
app.set('views', path.join(__dirname, 'views'));

//configuración de handlebars (especifica el layout por defecto y la extensión de los archivos)
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas de app
//requerimos el archivo que controla las peticiones en las rutas
app.use(require('./routes/index'));

//archivos estáticos
//especifico la ruta donde encontrar los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));




module.exports = app;