// Calculator functions

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 -num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function calculator (num1, num2, operator) {
    return operator(num1, num2);
}

// Show the number on calculator

var numb1;
var numb2;
var signal;
var result;
var numberOfButtons = document.querySelectorAll("button").length;


for (var i = 0; i<numberOfButtons; i++)  {
    
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var numberClicked = this.innerHTML;
        var numbers = 0;
        numbers = numbers + numberClicked;
        document.querySelector("p").innerHTML = numbers;
    })

}

while ()