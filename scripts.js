let numberButtons = document.querySelectorAll(".numberButton");
let operationButtons = document.querySelectorAll(".operationButton");
let equalButton = document.querySelector("#bEqual");
let clearButton = document.querySelector("#C");
let display = document.querySelector("#display");
let eventsButtons=[];
let eventsOpButtons=[];


let operationFlag="";
let displayNumber="";
let currentNumber=null;
let pastNumber=null;


for(buttn of [...numberButtons]){
eventsButtons.push(buttn.addEventListener('click',function(){clickedValue(this.textContent)}));
}
for(opButtn of [...operationButtons]){
    eventsOpButtons.push(opButtn.addEventListener('click',function(){setFlag(this.textContent)}));
}
let eventClearButton=clearButton.addEventListener('click',function(){clearDisplay()});
let eventEqualButton = equalButton.addEventListener('click',function(){calculate()});


function clickedValue(value){
    displayNumber+=value;
    currentNumber=parseFloat(displayNumber);
    updateDisplay(displayNumber);
}

function calculate(){
        switch(operationFlag){
            case "+":
                add();
                break;
            case "-":
                subtract();
                break;
            case "*":
                multiply();
                break;
            case "/":
                divide();
                break;
            default:
                pastNumber=currentNumber;
                currentNumber=null;
                break;
        }
    }


function clearDisplay(){
    updateDisplay("");
    displayNumber="";
    currentNumber=null;
    pastNumber=null;
    operationFlag="";
}

function updateDisplay(valueToDisplay){
    display.textContent = valueToDisplay;
}

function saveNumber(){

    if (currentNumber!==null){
        pastNumber=currentNumber;
        currentNumber=null;
        displayNumber="";
        updateDisplay(pastNumber.toString());
    }

}

function setFlag(operand){
    saveNumber();
    operationFlag=operand;
    }

function add(){
    if(pastNumber===null){
        pastNumber=0;
    }
    if(currentNumber===null){
        currentNumber=0;
    }
    currentNumber=currentNumber+pastNumber;
    displayNumber=currentNumber.toString();
    saveNumber();

}

function subtract(){
    if(pastNumber===null){
        pastNumber=0;
    }
    if(currentNumber===null){
        currentNumber=0;
    }
    currentNumber=pastNumber-currentNumber;
    displayNumber=currentNumber.toString();
    updateDisplay(displayNumber);
    saveNumber();
}

function multiply(){
    if(pastNumber===null){
        pastNumber=1;
    }
    if(currentNumber===null){
        currentNumber=1;
    }
    currentNumber*=pastNumber;
    displayNumber=currentNumber.toString();
    updateDisplay(displayNumber);
    saveNumber();
}

function divide(){
    if(pastNumber===null){
        pastNumber=1;
    }
    if(currentNumber===null){
        currentNumber=1;
    }
    if(currentNumber==0){
     updateDisplay("ERROR");   
    }
    else{
        currentNumber=pastNumber/currentNumber;
        displayNumber=currentNumber.toString();
        updateDisplay(displayNumber);
        saveNumber();
    }
}