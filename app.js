const express = require('express');
const path = require('path');
const navInfo = require('./navInfo');
const morgan = require('morgan');
// const favicon = require('serve-favicon');


const app = express();

// console.log(definitions);
app.set('view engine','ejs'); // allows us to exclude the file extension

// This middleware is needed to read http post data
app.use(express.urlencoded({extended : false}));

app.get('/', function(request, response){
  response.render("index", {menu: navInfo});
});


app.post('/contact', function(request, response){
  const name = request.body.name;
  const email = request.body.email;
  var obj = {nameD: name, emailD: email};
  // response.send (obj);
  response.render("contact", obj);
});

// Set up our view endpoints

app.get('/:page', function(request, response){
  if(request.accepts('ejs')) {
    response.send('404: File Not Found');
  } 
    response.render(request.params.page, {menu: navInfo})
});



// app.use('/favicon.ico', express.static('img/favicon.ico'));

// Serve static assets
app.use(express.static(path.join(__dirname, 'assets')));

// Catch our 404s
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

