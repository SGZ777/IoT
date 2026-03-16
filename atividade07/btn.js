const botao = 14;
const led = 25;

let statusLED = 0
let flaggButton = 0

pinMode(botao, "input_pullup");

pinMode(led, "output");

setInterval(function () {
  if (digitalRead(botao) == 0) {

    flaggButton = 1

  } else if (flaggButton == 1) {

    statusLED = !statusLED
    digitalWrite(led, statusLED)
    flaggButton = 0

  }
}, 10);
