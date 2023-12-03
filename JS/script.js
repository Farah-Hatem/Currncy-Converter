let inputNumber = document.getElementById("from-number");
let outputNumber = document.getElementById("to-number");
let inputCurrency = document.getElementById("from-currency");
let outputCurrency = document.getElementById("to-currency");
let arrow = document.getElementById("arrow");
let jdSelectFrom = document.getElementById("jd-from");
let OutResult;
inputCurrency.onchange = function() {
    deleteInputes();
    exchange();
}
exchange();
outputCurrency.onchange = function() {
    deleteInputes();
    exchange();
}
inputNumber.onkeyup = exchange();

arrow.onclick = function() {
    let x = outputCurrency.value;
    outputCurrency.value = inputCurrency.value;
    inputCurrency.value = x;
    let y = outputNumber.value;
    outputNumber.value = inputNumber.value;
    inputNumber.value = y;
    console.log(outputCurrency.value);
    exchange();
}
// function usDollarToJordanDennr(inputNum,outputNum) {
//     let result = (inputNumber.value * 0.7094) ;
//     outputNumber.value = result;
// }
// function jordanDennarToUsDollar() {
//     let result = (outputNumber.value / 0.7094) ;
//     inputNumber.value = result;
// }
function exchange() {
    if (inputCurrency.value == "denar" && outputCurrency.value == "US Dollar") {
        inputNumber.onkeyup = function () {
            if (inputNumber.value < 0) {
                console.log("hhh");
                inputNumber.style.color = "red";
            }
            else {
                inputNumber.style.color = "black";
                let result = (inputNumber.value / 0.7094) ;
                outputNumber.value = result;
                OutResult = result;
            }
        }
        outputNumber.onkeyup = function() {
            let result = (outputNumber.value * 0.7094) ;
            inputNumber.value = result;
        }
    } 
    else if (inputCurrency.value == "US Dollar" && outputCurrency.value == "denar") {
        inputNumber.onkeyup = function () {
            let result = (inputNumber.value * 0.7094) ;
            outputNumber.value = result;
            OutResult = result;
        }
        outputNumber.onkeyup = function() {
            let result = (outputNumber.value / 0.7094) ;
            inputNumber.value = result;
        }
    }
    else if (inputCurrency.value == outputCurrency.value) {
        inputNumber.onkeyup = function () {
            outputNumber.value = inputNumber.value;
        }
        outputNumber.onkeyup = function() {
            inputNumber.value = outputNumber.value;
        }
    }  
}
console.log(exchange(inputNumber.value));
function deleteInputes() {    
    
    // if (inputNumber.value != '') {
    //     let num = inputNumber.value;
    //     exchange();
    //     inputNumber.value = num;
    //     // outputNumber.value = OutResult;
    // }
    outputNumber.value = '';
    inputNumber.value = '';
}