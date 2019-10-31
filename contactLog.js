const fs = require('fs');

fs.appendFile('./assets/contactLog.txt', "Hello world (again)...\n", err => {
  if (err) throw err;
  console.log('File saved.');
})

module.exports = fs;