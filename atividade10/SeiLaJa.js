const Volume = 32

setInterval(function()
{
    let valorPot = analogRead(Volume) 
    console.log("Valor do Pot: " + (valorPot*100*1.00025).toFixed(2) + "%")

    let angulo = 270*valorPot*1.00025
    console.log("Angulo do Pot: " + angulo.toFixed(2) +'\n')
}, 250)
