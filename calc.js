var currentValue = document.forms.calculator.elements[0];
var resultStr = 0;
var operationFlag = false;
var countFlag = false;
var operationNumber;
var operand1;
var operand2;

function insertNumber(x) {
   countFlag = false; 
   if(x === 0) {
      resultStr = 0;}
   else if (x < 10) {
      resultStr = Number(resultStr + x.toString());} 
   else if (x === 10) {
      if (resultStr > 0) {resultStr = -resultStr;}
         else {resultStr = Math.abs(resultStr);} 
   }
   else if (x === 11) {
      if (/\./.test(resultStr)){resultStr += "0"}
          else {resultStr = Number(resultStr + "0")}  
   } 
   else {
      if (!(/\./.test(resultStr))){resultStr += ".";}
   }
    currentValue.setAttribute("value", resultStr);
}

function calculateResult(x){
   var nullFlag = false;
   if (x === 0) {
      operationFlag = false;
      if(!countFlag) {operand2 = Number(resultStr);}
      if (resultStr === "0") {operand2 = operand1;} 
      switch(operationNumber){
         case 1: resultStr = (operand2 * 10 + operand1 * 10) / 10; 
         break;
         case 2: resultStr = (operand1 * 10 - operand2 * 10) / 10;
         break;
         case 3: resultStr = ((operand2 * 10) * (operand1 * 10)) / 100;
         break;
         case 4: if(operand2 == 0) {
                 nullFlag = true;
                 break;}
                 resultStr = (operand1 * 10) / (operand2 * 10);
         break;}
      operand1 = resultStr;
      countFlag = true;
      if (nullFlag) {currentValue.setAttribute("value", "Деление на ноль");}
          else {currentValue.setAttribute("value", resultStr);}
                }
   else {
        operationNumber = x; 
        if (!operationFlag) { 
           operand1 = Number(resultStr); 
           resultStr = "0";
           operationFlag = true;}
        }
} 

