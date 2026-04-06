const dht11_pin = 32

let dht = require("dht11.js").connect(dht11_pin)

setInterval(function() {
    let temp = dht.readTemperature()
    let umid = dht.readHumidity()

    console.log("Temperatura: " + temp.toFixed(0) + " °C")
    console.log("Umidade: " + umid.toFixed(0) + " %")
}, 500)