const Volume = 32;
const vermei = 25;
const amarelo = 26;
const verdi = 27;

setInterval(function () {
  let valorPot = analogRead(Volume);
  console.log("Valor do Pot: " + (valorPot * 100 * 1.00025).toFixed(2) + "%");

  let angulo = 270 * valorPot * 1.00025;
  console.log("Angulo do Pot: " + angulo.toFixed(2) + "\n");
  let porcentagem = (valorPot * 100 * 1.00025).toFixed(2);
  if (porcentagem < 20) {
    digitalWrite(vermei, 1);
    digitalWrite(amarelo, 0);
    digitalWrite(verdi, 0);
  } else if (porcentagem < 60) {
    digitalWrite(vermei, 0);
    digitalWrite(amarelo, 1);
    digitalWrite(verdi, 0);
  } else if (porcentagem < 100) {
    digitalWrite(vermei, 0);
    digitalWrite(amarelo, 0);
    digitalWrite(verdi, 1);
  }
}, 250);
