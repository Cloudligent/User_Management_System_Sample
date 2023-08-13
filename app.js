const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

// Parsing middleware
// Parse application/x-.www-form-urlcoded
app.use(bodyparser.urlencoded({extended: false}))

// Parse application/json
app.use(bodyparser.json());

// Static files
app.use(express.static('public'));

// Templating Engine
const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

// Router
app.get('',(req, res)=> {
    res.render('index');
});


app.listen (port, () => console.log('listening on port ${port}'));
