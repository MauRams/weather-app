const request = require('request')
const getToken = require('../tokens.js')
// get your own tokens by signing up at https://account.mapbox.com
const pt = getToken.sendMKey().toString()

const geoCode = (address, callback) => {
    const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + pt + '&limit=1'

    request({ url: URL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Location Service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geoCode