const express = require('express');
const path = require('path');
const navInfo = require('./navInfo');
const contactLog = require('./contactLog');

const app = express();

app.set('view engine','ejs'); 

// Middleware for reading http post data
app.use(express.urlencoded({extended : false}));
// Middleware for logging contact form data
app.use('/contact', contactLog);

// Create a get endpoint that accepts requests index
app.get('/', function(request, response){
  response.render('index', {menu: navInfo, page: 'index'});
});


// Create a POST endpoint that accepts requests from the form
app.post('/contact', function(request, response){
  const nameD = request.body.name;
  const emailD = request.body.email;
  const obj = {name: nameD, email: emailD};
    response.render('contact', obj);
});

// Create a get endpoint that accepts requests page
app.get('/:page', function(request, response){
  if(request.accepts('ejs')) {
    response.send('404: File Not Found');
  } 
    response.render(request.params.page, {menu: navInfo, page: request.params.page})
});

// Serve static assets
app.use(express.static(path.join(__dirname, 'assets')));

// Catch 404 error
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});

