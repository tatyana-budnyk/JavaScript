var currentValue = document.forms.calculator.elements[0];
var resultStr = "";
var operationFlag = false;
var operationNumber;
var operand1;

function insertNumber(x) {
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
   switch(x) {
        case 0: 
                operationFlag = false;
                switch(operationNumber){
                    case 1: resultStr = (resultStr * 10 + operand1 * 10) / 10; 
                    break;
                    case 2: resultStr = (operand1 * 10 - resultStr * 10) / 10;
                    break;
                    case 3: resultStr = ((resultStr * 10) * (operand1 * 10)) / 100;
                    break;
                    case 4: if(resultStr == 0) {
                            nullFlag = true;
                            break;}
                            resultStr = (operand1 * 10) / (resultStr * 10);
                    break;}
                operand1 = resultStr;
                if (nullFlag) {currentValue.setAttribute("value", "Деление на ноль");}
                else {currentValue.setAttribute("value", resultStr);}
                break;
        case 1: 
        case 2: 
        case 3:   
        case 4: operationNumber = x; 
                if (operationFlag) {break;}
                operand1 = Number(resultStr);
                resultStr = 0;
                operationFlag = true;
                break; 
   }   
} 