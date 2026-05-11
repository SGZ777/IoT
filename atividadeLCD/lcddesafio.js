I2C1.setup()
let lcd = require("HD44780").connectI2C(I2C1)
let mensagem = "teste           "
let p = 0                     

 setInterval(() => {
    let linha = "";
    for (let i = 0; i < 16; i++) {
      linha += mensagem[(i + p) % mensagem.length];
    }
    lcd.setCursor(0, 0);
    lcd.print(linha);       
    p++;                    
  }, 250)