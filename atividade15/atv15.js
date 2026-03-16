const potenciometro = 36;
const LED = 26;

setInterval(function () {
  let valorPot = analogRead(potenciometro);
  console.log("Porcentagem acesa: " + (valorPot * 100 * 1.00025).toFixed(2) + "%");
  analogWrite(LED, valorPot)
}, 100);