const request = require('request')
const chalk = require('chalk')
const getToken = require('../tokens.js')
const wt = getToken.sendWKey().toString()

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' + wt + '/'
        + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '?units=si'        

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                response.body.daily.data[0].summary +
                    ' it is currently ' + response.body.currently.temperature + ' degrees out. \nThere is a ' +
                chalk.red.bold(response.body.currently.precipProbability + '%') + ' chance of rain'
            )
        }
    })
}

module.exports = forecast