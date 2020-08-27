const request = require('request');

const getUserInput = () => process.argv.slice(2);

const requestString = 'https://api.thecatapi.com/v1/breeds/search?q=' + getUserInput();

request(requestString, (error, response, body) => {
  if (!error && response && response.statusCode === 200) {
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log('Are you sure that\'s a real cat?');
    }
  } else if (error) {
    console.log('An error has occured: ', error);
  } else if (response && response.statusCode) {
    console.log('Website returned an error code: ', response.statusCode);
  }
    
});