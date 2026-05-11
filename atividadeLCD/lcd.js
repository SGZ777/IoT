I2C1.setup();
let lcd = require("HD44780").connectI2C(I2C1);
let msgFlag = 0;

setInterval(function () {
  if (msgFlag == 0) {
    lcd.setCursor(0, 0);
    lcd.print(" A turma 3TD eh ");
    lcd.setCursor(0, 1);
    lcd.print("  A MELHOR :)  ");
    msgFlag = 1;
  } else {
    lcd.setCursor(0, 0);
    lcd.print("A turma 3TD eh a");
    lcd.setCursor(0, 1);
    lcd.print("mais sofredora!");
    msgFlag = 0;
  }
}, 1000);
