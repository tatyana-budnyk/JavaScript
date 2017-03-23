var currentValue = document.forms.calculator.elements[0];
var resultStr = "";
var operationFlag = false;
var operationNumber;
var operand1;

function insertNumber(x) {
    switch(x) {
        case 0:  if (/\./.test(resultStr)){resultStr += "0"}
                 else {resultStr = Number(resultStr + "0")} 
        break;
        case 1:  resultStr = Number(resultStr + "1");
        break;
        case 2:  resultStr = Number(resultStr + "2")
        break;
        case 3:  resultStr = Number(resultStr + "3")
        break;
        case 4:  resultStr = Number(resultStr + "4")
        break;
        case 5:  resultStr = Number(resultStr + "5")
        break;
        case 6:  resultStr = Number(resultStr + "6")
        break;
        case 7:  resultStr = Number(resultStr + "7")
        break;
        case 8:  resultStr = Number(resultStr + "8")
        break;
        case 9:  resultStr = Number(resultStr + "9")
        break;
        case 10: resultStr = 0;
        break;
        case 11: if (resultStr > 0) {resultStr = -resultStr;}
                 else {resultStr = Math.abs(resultStr);}   
        break;
        case 12: if (/\./.test(resultStr)){break;}
                 else {resultStr += "."} 
        break;
    }
    currentValue.setAttribute("value", resultStr);
}

function calculateResult(x){
   var nullFlag = false;
   switch(x) {
        case 0: 
                operationFlag = false;
                switch(operationNumber){
                    case 1: resultStr += operand1; 
                    break;
                    case 2: resultStr = operand1 - resultStr;
                    break;
                    case 3: resultStr *= operand1;
                    break;
                    case 4: if(resultStr == 0) {
                            nullFlag = true;
                            break;}
                            resultStr = operand1 / resultStr;
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