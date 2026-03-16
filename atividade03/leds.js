const ledverm = 26;
const ledverd = 25;
let statusLedVerd = 0;
let statusLedVerm = 1;

pinMode(ledverm, "output");
pinMode(ledverd, "output");

// setInterval(() => {
//   statusLedVerd = !statusLedVerd;
//   statusLedVerm = !statusLedVerm;
//   digitalWrite(ledverd, statusLedVerd);
//   digitalWrite(ledverm, statusLedVerm);
// }, 500);

function Pisca() {
  digitalWrite(ledverd, 1);
  digitalWrite(ledverm, 0);
  setTimeout(function () {
    digitalWrite(ledverd, 0);
    digitalWrite(ledverm, 1);
    setTimeout(Pisca, 500)
  }, 500);
}
Pisca()