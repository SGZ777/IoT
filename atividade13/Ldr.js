const LDR = 32;
const vermei = 25;

setInterval(function () {
  let valorLdr = analogRead(LDR);
  console.log("Valor do Ldr: " + (valorLdr * 100 * 1.00025).toFixed(2) + "%");
  if (valorLdr > 0.9) {
    digitalWrite(vermei, 1);
  } else {
    digitalWrite(vermei, 0);
  }
}, 250);
