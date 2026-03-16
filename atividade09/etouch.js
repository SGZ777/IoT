const LED = 25
const TOUCH0 = 33
const TOUCH1 = 32

pinMode(LED, "output")
let touch0 = require("touch.js").connect(TOUCH0)
let touch1 = require("touch.js").connect(TOUCH1)

setInterval(function() {


    console.log(touch1.read())

    if (touch0.read() < 150){
        digitalWrite(LED, 1)
    }
     if(touch1.read() < 170){
        digitalWrite(LED, 0)
    }

},100)
