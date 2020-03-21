const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]
//destructuring Syntax
geocode(address, (error, { latitude, longitude, location }) => {
    if (!address) {
        return console.log('Please provide a valid address');

    } else {
        if (error) {
            return console.log(error);

        } else {
            forecast(latitude, longitude, (error, forecastData) => {

                if (error) {
                    return console.log(error)
                } else {
                    console.log(location);
                    console.log(forecastData);
                }
            })
        }
    }
})