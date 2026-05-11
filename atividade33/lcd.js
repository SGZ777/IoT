I2C1.setup()
let lcd = require("HD44780").connectI2C(I2C1)
let p = 0
setInterval(function() {
    lcd.setCursor(p, 0)
    lcd.print("Display Lcd util")
    lcd.setCursor(0, 0)
    lcd.print("              ")
    if (p < 15) {
        p ++
    } else {
        p = 0
    }
    
},250)