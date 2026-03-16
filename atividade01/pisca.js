const LED = 2;
let statusLed = 0;
pinMode(LED, "output");

setInterval(() => {
    statusLed = !statusLed
    digitalWrite(LED, statusLed);
}, 5000)

// function piscaLED() {
//   digitalWrite(LED, HIGH);
//   setTimeout(function () {
//     digitalWrite(LED, LOW)
//     setTimeout(piscaLED, 30)
//   }, 30);
// }

piscaLED()