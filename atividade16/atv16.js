const LEDr = 27
const LEDg = 33
const LEDb = 32

let vermelho = 0
let verde = 0
let azul = 0

setInterval(function() {
    analogWrite(LEDr, vermelho/255)
    analogWrite(LEDg, verde/255)
    analogWrite(LEDb, azul/255)
}, 50)