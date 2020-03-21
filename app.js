const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const address = process.argv[2]

geocode(address, (error, geoData) => {
    if (!address) {
        return console.log('Please provide a valid address');

    } else {
        if (error) {
            return console.log(error);

        } else {
            forecast(geoData.latitude, geoData.longitude, (error, forecastData) => {

                if (error) {
                    return console.log(error)
                } else {
                    console.log(geoData.location);
                    console.log(forecastData);
                }
            })
        }
    }
})