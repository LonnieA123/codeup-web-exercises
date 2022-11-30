let num = 7
console.log(num.toString());
console.log('' + num);
console.log(string(num));

let str = "7"
console.log(parseFloat(str))
console.log(Number(str))
console.log(parseInt(number))

function isNum(input){
    return !isNaN(parseFloat(input))
}

console.log(isNum(7))
console.log(isNum("bob"))

//parameters (greeting)
//arguments {howdy}

function sayGreeting(greeting){
    return greeting
}
sayGreeting("howdy")


// //expression
// function sayHello(greeting){
//     return greeting
// }
//
//
// //declaration
// var sayHello = function(greeting){
//     return greeting
// }


// //arrow
// const sayHello = (greeting) => greeting{
//     return greeting
// }


//IIFE
//
// (function(){
//
//
//
//
// })();
function Five(num){
    return num = 5
}

function addTwo(fn){
    return fn() + 2;
}

