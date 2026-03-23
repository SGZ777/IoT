const LEDr = 27
const LEDg = 33
const LEDb = 32

let corIndice = 0
let cores = 
[
   [255,0,0],        //vermelha
   [0, 255, 0],      //verda
   [0, 0, 255],      //azula
   [255, 69, 0],     //laranja
   [255, 214, 0],    //amarela
   [0, 255, 255],    //ciano
   [255, 0, 255],    //magenta
   [255, 255, 255],  //branca
   [143, 0, 255]     //roxa
]

setInterval(function() {
    analogWrite(LEDr, cores[corIndice][0]/255)
    analogWrite(LEDg, cores[corIndice][1]/255)
    analogWrite(LEDb, cores[corIndice][2]/255)
    corIndice = (corIndice + 1) % cores.length
}, 200);