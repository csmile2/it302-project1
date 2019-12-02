var request = require('request');

const worldDataAPIKey = "NOJRxRv2rg2znjc3KnkqbsBXLtS96pqiuubDP3Bvn8exZaVknklknqDe2Xkw";

let url = "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=NOJRxRv2rg2znjc3KnkqbsBXLtS96pqiuubDP3Bvn8exZaVknklknqDe2Xkw";
request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
    let json = JSON.parse(body);
    console.log(json["data"][0]["price"]);

});


