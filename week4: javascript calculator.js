var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please enter first number: ");
var secondNum = readlineSync.questionInt("Please enter second number: ");
var selectedOperator = readlineSync.question("What operation do you want to perform: add, sub, mul, div, quit? ");

function addTwoNumbers(num1, num2){
    return "Adding Number1: " + num1 + " with Number2: " + num2 + " equals to: " + (num1 + num2);
}
function subtractTwoNumbers(num1, num2){
    return "Adding Number1: " + num1 + " with Number2: " + num2 + " equals to: " + (num1 - num2);
}
function multiplyTwoNumbers(num1, num2){
    return "Adding Number1: " + num1 + " with Number2: " + num2 + " equals to: " + (num1 * num2);
}
function divideTwoNumbers(num1, num2){
    return "Adding Number1: " + num1 + " with Number2: " + num2 + " equals to: " + (num1 / num2);
}

if (selectedOperator == "add"){
    //ADD operation
    console.log(addTwoNumbers(firstNum, secondNum));
} else if(selectedOperator == "sub"){
    //SUB operation
    console.log(subtractTwoNumbers(firstNum, secondNum));
} else if (selectedOperator == "mul"){
    //MULT operation
        console.log(multiplyTwoNumbers(firstNum, secondNum));
} else if (selectedOperator == "div"){
    //DIV operation
    console.log(divideTwoNumbers(firstNum, secondNum));
} if (selectedOperator == "quit"){
    //QUIT 
    console.log("Thanks for using this calculator!");
} 