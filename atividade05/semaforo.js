const ledverm = 25;
const ledverd = 27;
const ledamar = 26;

function Semaforo() {
  digitalWrite(ledverd, 1);
  digitalWrite(ledamar, 0);
  digitalWrite(ledverm, 0);
  setTimeout(function () {
    digitalWrite(ledverd, 0);
    digitalWrite(ledamar, 1);
    digitalWrite(ledverm, 0);
    setTimeout(function () {
      digitalWrite(ledverd, 0);
      digitalWrite(ledamar, 0);
      digitalWrite(ledverm, 1);
      setTimeout(Semaforo, 500)
    }, 600);
  }, 700);
}

Semaforo()