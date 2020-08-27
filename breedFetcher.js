const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const requestString = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(requestString, (error, response, body) => {
    if (!error && response && response.statusCode === 200) {
      const data = JSON.parse(body);
      if (data[0]) {
        callback(null,data[0].description);
      } else {
        callback('Are you sure this is a real cat?', null );
      }
    } else if (error) {
      callback(error, null);
    }
  });
};

module.exports = {fetchBreedDescription};