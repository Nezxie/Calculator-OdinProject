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
let pastNumber="";
let currentNumber="";


for(buttn of [...numberButtons]){
eventsButtons.push(buttn.addEventListener('click',function(){rememberValue(this.textContent)}));
}
for(opButtn of [...operationButtons]){
    eventsOpButtons.push(opButtn.addEventListener('click',function(){setFlag(this.textContent)}));
}
let eventClearButton=clearButton.addEventListener('click',function(){clearDisplay()});
let eventEqualButton = equalButton.addEventListener('click',function(){calculate()});

function calculate(){
    
}

function clearDisplay(){
    updateDisplay("");
    pastNumber="";
    currentNumber="";
    operationFlag="";
}

function updateDisplay(valueToDisplay){
    display.textContent = valueToDisplay;
}

function rememberValue(number){
    pastNumber+=number;
    updateDisplay(pastNumber);
}

function setFlag(operand){
    flagType=operand;
}

function add(v1,v2){
    pastNumber=String(v1+v2);
    updateDisplay(pastNumber);
}

function subtract(v1,v2){
    pastNumber=String(v1-v2);
    updateDisplay(pastNumber);
}

function multiply(v1,v2){
    pastNumber=String(v1*v2);
    updateDisplay(pastNumber);
}

function divide(v1,v2){
    if(v2==0){
        pastNumber="ERROR";
    }
    else{
        pastNumber=String(v1/v2);
    }
    updateDisplay(pastNumber);
}