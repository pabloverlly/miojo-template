const express    = require('express');
const hbs        = require('express-handlebars');
const bodyParser = require('body-parser');

const router     = require('./routes/index');
const api        = require('./routes/api');


const app = express();


// view engine setup
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
  extname: 'hbs',
  layoutsDir: __dirname + '/views/',
  partialsDir: __dirname + '/views/partials/'
}));

// static folder
app.use('/assets', express.static('assets'));

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api', api);
app.use('/', router);



app.listen(8080, () => console.log('http://localhost:8080/ - up!'));