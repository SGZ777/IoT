const LED = 27
let statusLed = 0
pinMode(LED, "output")

setInterval(() => {
    statusLed = !statusLed
    digitalWrite(LED, statusLed)
}, 500)
