const request = require('request')
const chalk = require('chalk')
const getToken = require('./tokens.js')

const wt = getToken.sendWKey().toString()
const pt = getToken.sendMKey().toString()


// geocoding
const placeReq = () => {
    const placeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dublin.json?access_token=' + pt + '&limit=1'
    request({ url: placeURL, json:true }, (error, response) => {

        if (error) {
           console.log('Unable to connect to Location Service');
            
        } else if (response.body.features.length === 0){
            console.log('Unable to find location, try another search');
            
        }else{
            const latitude = response.body.features[0].center[1];
            const longitude = response.body.features[0].center[0];

            console.log(latitude, longitude);
            // return latitude, longitude
        }
        
    })
}

//Weather Service
const weatherReq = () => {

    const weatherURL = 'https://api.darksky.net/forecast/' + wt + '/37.8267,-122.4233?units=si'
    request({ url: weatherURL, json: true }, (error, response) => {

        if (error) {
            console.log('Unable to connect to weather service!');
            
        }else if(response.body.error){
            console.log('Unable to find location')
        } 
        else {
            const temp = response.body.currently.temperature;
            const precip = response.body.currently.precipProbability;
            console.log(response.body.daily.data[0].summary +
                ' it is currently ' + temp + ' degrees out. \nThere is a ' +
                chalk.red.bold(precip + '%') + ' chance of rain');
        }
        

        
    })
}

// weatherReq()
placeReq()