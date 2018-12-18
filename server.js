const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const axios = require('axios');
const  mongoose = require('mongoose');
const cheerio = require('cheerio');

const port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(port, function(){
    console.log("Listening on PORT... " + port);
});


