const fs = require('fs');

// Middleware module to add the form data on log text file 
const contactLog = function(request, response, next) {
      const nameD = request.body.name;
      const emailD = request.body.email;
      const obj = {name: nameD, email: emailD}

      fs.appendFile('./assets/contactLog.txt', JSON.stringify(obj) + '\n', err => {
        if (err) throw err;
          console.log('File saved.');
      });
      next();
  };


module.exports = contactLog;