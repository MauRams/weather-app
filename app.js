const request = require('request')
const chalk = require('chalk')

const URL = 'https://api.darksky.net/forecast/8be10b9b369a21a2bb0f375d7ad25ea5/37.8267,-122.4233'

request({ url: URL, json:true }, (error, response) => {
    const temp = response.body.currently.temperature;
    const precip = response.body.currently.precipProbability;
    // console.log(response.body.currently.precipProbability);
    console.log('it is currently ' + temp + ' degrees out. \nThere is a ' + chalk.red.bold(precip) + '% chance of rain');
    
    
    
    
})