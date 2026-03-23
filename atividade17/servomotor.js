const servmotor = 13

let angle = 0
let anguloAnterior = -1

setInterval(function() 
{
    if (anguloAnterior != angle){
    let posicao = angle/18 + 2.5
    analogWrite(servmotor, posicao/100, {freq: 50})
    anguloAnterior = angle
    }
}, 500)
