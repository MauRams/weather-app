const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// geocode('Dublin', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
    
// })



forecast(53.3425, -6.26583, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
