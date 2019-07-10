const axios = require("axios");

const getLugarLatLon = async (dir) => {

    const encodedURL = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': 'a74174b956msh32ea244fff4f7fbp17cbabjsn826111507f0a' }
    });

    //? With Promises
    // instance.get()
    //     .then(res => {
    //         console.log(res.data.Results[0]);

    //     })
    //     .catch(err => {
    //         console.log("Error: " + err);
    //     });

    //? With async and await
    const resp = await instance.get();
    const results = resp.data.Results;

    if (results.lentgth === 0) {
        throw new Error(`No hay respultados para ${dir}`);
    }


    const direccion = results[0].name;
    const lat = results[0].lat;
    const lon = results[0].lon;

    return {
        direccion,
        lat,
        lon
    }

}


module.exports = {
    getLugarLatLon
}