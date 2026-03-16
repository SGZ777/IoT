const ledverm = 26;
const ledverd = 25;
let statusLedVerd = 0;
let statusLedVerm = 1;

setInterval(() => {
  statusLedVerm = !statusLedVerm;
  digitalWrite(ledverm, statusLedVerm);
}, 800);

setInterval(() => {
  statusLedVerd = !statusLedVerd;
  digitalWrite(ledverd, statusLedVerd);
}, 300);
