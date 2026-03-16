const botao1 = 14;
const botao2 = 13;
const led = 25;

pinMode(botao1, "input_pullup");
pinMode(botao2, "input_pullup");
pinMode(led, "output");

setInterval(function () {
  if (digitalRead(botao1) == 0) {
    digitalWrite(led, 1);
    console.log("Led ligado!");
  }
  if (digitalRead(botao2) == 0) {
    digitalWrite(led, 0);
    console.log("Led desligado!");
  }
}, 50);
