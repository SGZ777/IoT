const LED = 27
const POT = 36

const WIFI_SSID = "WIFI_IOT"
const MQTT_BROKER = "10.84.6.130"
const MQTT_TOPIC_LED = "Nietzsche/led"
const MQTT_TOPIC_POT = "Nietzsche/pot"

pinmode(LED, 'output');

let wifi = require("Wifi");
let mqtt = require("MQTT").create(MQTT_BROKER, {client_id: "Friedrich Nietzsche"})

wifi.connect(WIFI_SSID)

wifi.on("connected", function() {
    console.log("Wi-Fi conectado!")
    // console.log(wifi.getStatus())
    console.log("Conectando-se ao Broker MQTT...")
    mqtt.connect()
})

wifi.on("disconnected", function() {
    console.log("Desconectado do Wi-Fi")
    console.log("Reconectando...")
    wifi.connect(WIFI_SSID)
})


mqtt.on("connected", function() {
    console.log("MQTT conectado!")
    mqtt.subscribe(MQTT_TOPIC_LED)
})

mqtt.on("disconnected", function() {
    console.log("MQTT desconectado!")
    console.log("Reconectando...")
    mqtt.connect()
})

mqtt.on("message", function(topic, message) {
    console.log("Mensagem recebida no tópico " + topic + ": " + message)
    if (topic === MQTT_TOPIC_LED) {
        if (message === "1") {
            digitalWrite(LED, 1)
        } else if (message === "0") {
            digitalWrite(LED, 0)
        }
    }
})

setInterval(function() {
    let valorPot = analogRead(POT) * 100
    console.log("Valor do Potenciômetro: " + valorPot.toFixed(0))
    mqtt.publish(MQTT_TOPIC_POT, valorPot.toFixed(0))
}, 1000)