let numberButtons = document.querySelectorAll(".numberButton");
let operationButtons = document.querySelectorAll(".operationButton");
let equalButton = document.querySelector("#bEqual");
let clearButton = document.querySelector("#C");
let display = document.querySelector("#display");
let eventsButtons=[];
let eventsOpButtons=[];

//(i know its javascript, but still)
//all types will be string and i will convert right before calculations
let operationFlag="";
let currentNumber="";
let pastNumber="";


for(buttn of [...numberButtons]){
eventsButtons.push(buttn.addEventListener('click',function(){rememberValue(this.textContent)}));
}
for(opButtn of [...operationButtons]){
    eventsOpButtons.push(opButtn.addEventListener('click',function(){setFlag(this.textContent)}));
}
let eventClearButton=clearButton.addEventListener('click',function(){clearDisplay()});
let eventEqualButton = equalButton.addEventListener('click',function(){calculate()});

function calculate(){
    switch(operationFlag){
        case "+":
            add(toNumbers(currentNumber,pastNumber));
            break;
        case "-":
            subtract(toNumbers(currentNumber,pastNumber));
            break;
        case "*":
            multiply(toNumbers(currentNumber,pastNumber));
            break;
        case "/":
            divide(toNumbers(currentNumber,pastNumber));
            break;
        default:
            pastNumber=currentNumber;
            currentNumber="";
            break;
    }
}

function toNumbers(s1,s2){
    return [parseFloat(s1),parseFloat(s2)];
}

function clearDisplay(){
    updateDisplay("");
    currentNumber="";
    pastNumber="";
    operationFlag="";
}

function updateDisplay(valueToDisplay){
    display.textContent = valueToDisplay;
}

function rememberValue(number){
    currentNumber+=number;
    updateDisplay(currentNumber);
}

function setFlag(operand){
    operationFlag=operand;
    pastNumber=currentNumber;
    currentNumber="";
}

function add(values){
    currentNumber=String(values[0]+values[1]);
    updateDisplay(currentNumber);
}

function subtract(values){
    currentNumber=String(values[0]-values[1]);
    updateDisplay(currentNumber);
}

function multiply(values){
    currentNumber=String(values[0]*values[1]);
    updateDisplay(currentNumber);
}

function divide(values){
    if(values[1]==0){
        currentNumber="ERROR";
    }
    else{
        currentNumber=String(values[0]/values[1]);
    }
    updateDisplay(currentNumber);
}