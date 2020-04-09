let commandLineArgs = {URL: process.argv[2], DEST: process.argv[3]};
const request = require('request');
const fs = require('fs');

let writeFileToDestination = (destination, body) => {
  fs.writeFile(destination, body)
;}

request(`${commandLineArgs.URL}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  writeFileToDestination(`${commandLineArgs.DEST}`, body);
});