const botao = 14;
const led = 25;
pinMode(botao, "input_pulldown");
pinMode(led, "output");
setInterval(function () {
  if (digitalRead(botao) == 1) {
    digitalWrite(led, 1);3241
  } else {
    digitalWrite(led, 0);
    console.log("LED ligado")
  }
}, 10);
