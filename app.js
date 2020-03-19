const request = require('request')
const chalk = require('chalk')
const getToken = require('./tokens.js')

const wt = getToken.sendWKey().toString()
const pt = getToken.sendMKey().toString()


// get the cords from        the place name
const placeReq = () => {
    const placeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dublin.json?access_token=' + pt + '&limit=1'
    request({ url: placeURL, json:true }, (error, response) => {
        const coords = response.body.features[0].geometry.coordinates;
        return coords        
    })
}

const weatherReq = () => {

    const weatherURL = 'https://api.darksky.net/forecast/' + wt + '/37.8267,-122.4233?units=si'
    request({ url: weatherURL, json: true }, (error, response) => {
        const temp = response.body.currently.temperature;
        const precip = response.body.currently.precipProbability;
        console.log(response.body.daily.data[0].summary +
            ' it is currently ' + temp + ' degrees out. \nThere is a ' +
            chalk.red.bold(precip) + '% chance of rain');
    })
}

weatherReq()

// geodcoding