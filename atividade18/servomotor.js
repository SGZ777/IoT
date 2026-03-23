const servmotor = 13;
const potenciometro = 36;

setInterval(function () {
  let valorPot = analogRead(potenciometro).toFixed(2);

  let posicao = (valorPot * 180 * 1.00025) / 18 + 2.5;
  console.log(valorPot);
  analogWrite(servmotor, posicao / 100, { freq: 50 });
}, 100);
