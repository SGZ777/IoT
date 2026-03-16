const botao1 = 14;
const botao2 = 13;
const led = 25;

pinMode(botao1, "input_pullup");
pinMode(botao2, "input_pullup");
pinMode(led, "output");

let flagBimanual = 0;

setInterval(function () {

  if((digitalRead(botao1) == 0 ||  digitalRead(botao2) == 0) && flagBimanual == 0){
    
    flagBimanual = 1
    setTimeout(function(){

      if (digitalRead(botao1) == 0 && digitalRead(botao2) == 0){

        digitalWrite(led, HIGH)

      }

    },500)
  }

  else if (digitalRead(botao1) == 1 || digitalRead(botao2) == 1){
    digitalWrite(led, LOW)
    if(digitalRead(botao1) == 1 && digitalRead(botao2) == 1){
      flagBimanual = 0
    }
  }

}, 50);

// setInterval(function () {
//   if (digitalRead(botao1) == 1) {
//     statusbotao1 = 0;
//     digitalWrite(led, 0);
//   } else if (digitalRead(botao1) == 0) {
//     if (statusbotao1 == 0) {
//       setTimeout(function () {
//         if (digitalRead(botao2) == 0) {
//           statusbotao2 = 1;
//         }
//       }, 500);

//       if (statusbotao2 == 1) {
//         digitalWrite(led, 1);
//       } else {
//         statusbotao1 = 2;
//       }
//     }
//     console.log("Teste");
//   } else if (digitalRead(botao2) == 1) {
//     statusbotao2 = 0;
//     digitalWrite(led, 0);
//   }
//   if (digitalRead(botao2) == 0 && statusbotao2 == 0) {
//     setTimeout(function () {
//       if (digitalRead(botao1) == 0) {
//         statusbotao1 = 1;
//       }
//     }, 500);
//     if (statusbotao1 == 1) {
//       digitalWrite(led, 1);
//     } else {
//       statusbotao2 = 2;
//     }
//   }
// }, 100);
