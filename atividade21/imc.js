const TRIGGER = 33;
const ECHO = 32;

pinMode(TRIGGER, "output");
pinMode(ECHO, "input");

setInterval(function () {
  setWatch(
    function (info) {

    let tempoEco = info.time - info.lastTime;
    let distancia = 17000 * tempoEco;
    console.log("Distância: " + distancia.toFixed(2) + " cm");


   
    let altura = distancia / 100; // Convertendo para metros
    let peso = 100
    let imc = peso / (altura ** 2);
   // let imcc = peso/ Math.pow(altura, 2)

   // let imcc = peso/ Math.pow(altura, 2)

    console.log("IMC: " + imc.toFixed(2));

    }, ECHO, { edge: "falling" });
    digitalPulse(TRIGGER, 1, 1);
}, 1000);
