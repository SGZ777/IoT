const servmotor = 13;
const potenciometro = 36;

let angle = 0;
let anguloAnterior = -1;

setInterval(function () {
    let valorPot = analogRead(potenciometro);
    let angle = valorPot.toFixed(2);
    if (anguloAnterior != angle) {
    

    let posicao = (valorPot * 180 * 1.00025 ) / 18 + 2.5;
    console.log(valorPot);
    analogWrite(servmotor, posicao / 100, { freq: 50 });
    anguloAnterior = angle;
  }
}, 100);
 