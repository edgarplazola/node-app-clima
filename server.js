const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    }
}).argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getclima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (direccion) => {
    try {
        const placeData = await lugar.getLugarLatLon(direccion);
        const placeTemp = await clima.getclima(placeData.lat, placeData.lon);
        return `El clima de ${placeData.direccion} es de ${placeTemp}ºC.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
