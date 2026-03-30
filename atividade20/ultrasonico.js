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
    }, ECHO,
    { edge: "falling" });
    digitalPulse(TRIGGER, 1, 1);
}, 1000);
