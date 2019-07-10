const axios = require("axios");

const APIKey = "fc415e842c257c9ff579cc8bbb027f3c";

const getclima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}&units=metric`);

    return resp.data.main.temp
}

module.exports = {
    getclima
}