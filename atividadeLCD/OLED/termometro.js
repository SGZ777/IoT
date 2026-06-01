// 24x24
const sol = atob("GBgBABwAABwAABwAHBwYHhw8HwB4Dn7wBP/gAf/AA8PAA4HA94Dv94Dv94DvA8HAAePAA/+AB/8wDxx4HgB8HBw8CBwcABwAABwA");

// 24x24
const gelo = atob("GBgBADgAAP4AAP4AAP4AHDhwfDh8fDh8fjj4f//8d//8QccMAccAAccAYccMf//8f//8fjj4fDh8fDh8GHhwAP4AAP4AAPwAADgA");

// 26x64
const termometro = atob("GkABAB4AAB/gAA4cAAMDAAGAYABgGAAYBgA+AYAPgGAAYBgAGAYABgGAAYBgAGAYABgGAD4BgA+AYABgGAAYBgAGAYABgGAAYBgAGAYAPgGAD4BgAGAYABgGAAYBgAGAYABgGAAYBgA+AYAPgGAAYBgAGAYABgGAAYBgAGAYABgGAAYBgAeAeAOABwHAAODg/Bww/8MYeHhmOAcZjADGxwA48YAGPGABjxgAY8YAGPHADjYwAxmOAcZh4eGMP/DDg/BwcAA4DgAcAfA+AB/+AAD8AA==");

Graphics.prototype.setFontInter = function() {
  // Actual height 10 (9 - 0)
  // 1 BPP
  return this.setFontCustom(
    atob('AAAAA/z9AAYDwHA8AABcfz+D8fx0AAEQ5n2/9/zeAAgPA8z3H4Px3M+BwACcfz9P8dwPAAYDwGAAAAH8//AwA///h4ABwHgeBwAAAAMB4PwfAwBAAAPA4AAwDAMAwAADAEAAPv88AAH4fzBMEfx+AAIBgP8/wAGEYzHN0eRxAAYhjNk2R/H8AAGB4fj/P8BgABI+z7Nk3xPAAfx/Nk/x/C4ADBMc3j4OAAB/H82TZH8dwAHofzNM0fx+AAMwRAAE8zgABAMA4HgTDMAAAB4HgeB4HgABEMwbB4DgMAAYDPP0eBwAAHw/m7X1RV9f1/T8DAAAcHx8PQfgfAMAD/P8yTZH8dwABwfh/MEwTjGcAD/P8wTBH8fgcAA/z/MkyTJAA/z/MgyDIAAHB+H8wTNO8bwAP8fwYBgfz/H8AD/H8AAHAMAT/H8AB/P8HA+GcwwBAA/x/AEAQBAA/z/H4DwPH4/z/AAfz/HgPAPP8/wAH4fzBME4x/D4AD/P8zDMHgeAAH4fzBMc45/j6AD/P8zDOH8ewACIcz7NmzxvAAwDAP8/zAMAAD+H8AQBH8/x+AAwD4H8DwfH48AAPwfwfH8+B/A8fz4EAADjHcPg+HcwwAOAeA/D8cDgAAQTHM83T5OEAB/v//+AAA/B/geAD////4AHAcBwDAAAAgCAIAgCACAMAQAABcNw9D8HwAH8/wxDEPweAAHg/DEMQzBIAAOB8OwxH8/wAB4Pw9D0PwfAAfz/PAgAAD+fpi3+f4+AAfz/DAPw/A8ABfP8ABf//AB/P8fwfDMAB/P8AA/D8MA/D8MA/D8DwAD8PwwD8PwPAAHg/DEMQ/B4AA/z/MQxD8HgAB4PwxDEP8/wAHw/D8MAABoPw9DcNwAH8fw/AAHg/B8AQ/D8AA8B8Bw/DgAA+B8Hw8D8Hw/DAAAhDsHwfDsAA8R/B8/DgAAzDcPw5DEAAID8/7zwAf//3/ADz/+fwIAAAAMAwDAEAwDAAA=='),
    32,
    atob("AwMFBwcKBwQFBAUIAwUDBAcFBwcHBwcGBwcDAwcHBwYLCAcICAYGCAgDBggGCQgIBwgHBwcICAsHBwcFBAQFBgQGBwcHBwUHBwMDBgMKBwcHBwUGBAcGCQYGBgUEBQg="),
    10|65536
  );
}

const POT = 35;

I2C1.setup();
let oled = require("SSD1306").connect(I2C1);

setInterval(function () {
    let pot = analogRead(POT);
    let temp = pot * 50
    // x0 = 10
    // y0 = 5
    // x1 = 15
    // y1 = 40
    
    oled.clear();
    oled.drawImage(termometro, 102, 0);
    oled.fillRect(112, 40 - ((temp *35)/ 50), 117, 40);

    if (temp > 30) {
        oled.drawImage(sol, 78, 0);
    } else if (temp < 10) {
        oled.drawImage(gelo, 78, 0);
    }
    oled.setFontInter();
    oled.drawString("Temp.:", 10, 10);
    oled.drawString(temp.toFixed(1) + ".C", 10, 25);

    oled.flip();
}, 100);
