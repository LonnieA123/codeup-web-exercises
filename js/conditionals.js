"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */




// analyzeColor("green")
//
// function analyzeColor(colors) {
// let lowerColor = colors.toLowerCase()
//     if (lowerColor === "blue") {
//         return("i love blue too")
//     } else if (lowerColor === "red") {
//         return("red is okay")
//     } else if (lowerColor === "green") {
//         return("green is actually the best")
//     } else {
//         return("is that even a freaking color")
//     }
//
// }





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */


let result2 = switchAnalyzeColor(randomColor)
console.log(result2)

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
switchAnalyzeColor("red")
function switchAnalyzeColor(color) {

    switch (color) {
        case "blue":
            return("i love blue too")
            break;
        case "green":
            return("green is actually the best")
            break;
        case "red":
            return("red is okay")
            break;
        default:
            return("is this even a color")
            break
    }
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let userInput = prompt('what is your color');
let answer = switchAnalyzeColor(userInput)
alert(answer)



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber,totalAmount) {
//     console.log(luckyNumber)
//     if (luckyNumber === "0") {
//         return ("you get nothing")
//     } else if (luckyNumber === "1") {
//         luckyNumber = .10
//         return (1 - luckyNumber) * totalAmount
//     } else if (luckyNumber === "2") {
//         luckyNumber = .25
//         return (1 - luckyNumber) * totalAmount
//     } else if (luckyNumber === "3") {
//         luckyNumber = .35
//         return (1 - luckyNumber) * totalAmount
//     } else if (luckyNumber === "4") {
//         luckyNumber = .50
//         return (1 - luckyNumber) * totalAmount
//     } else if (luckyNumber === "5") {
//         return "you get everything for free!"
//
//     }
// }

function calculateTotal(luckyNum, total) {
    let discount,
        discountedPrice;

    switch (luckyNum) {
        case 0:
            discount = 0
            break;
        case 1:
            discount = 0.1;
            break
        case 2:
            discount = .25
            break
        case 3:
            discount = .35
            break
        case 4:
            discount = .50
            break
        case 5:
            discount = 1;
            break
        default:
            return "INCORRECT NUMBER"
        break;
    }



if (!isNaN(total)){
        discountedPrice = (total * (1 - discount));
    } else {
        return "ur dumb"
    }

    return discountedPrice.toFixed(2);
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);


var total = prompt("what is your total?")
let userResult2 = calculateTotal(luckyNumber,total)
alert(`your lucky number was ${luckyNumber}
The price before the discount was $${total}
the price after the discount was ${userResult2}`)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// if(confirm("would you like to enter a number?") == true){
//   let userInput = prompt("what is your number?")
// if(isNaN(userInput)) {
//     alert ("this is not a number!")
// } else {
//     let number = parseInt(userInput)
//     let evenOdd = number % 2
//     if (evenOdd == 0){
//         alert("this number is even")}
//     else {alert("this number is odd")}
//  alert("this number + 100 is " +  (number + 100))
//   if (number > -1){
//      alert ("this number is positive")
//   } else alert("this number is negative")
//  } } else {
//     alert("goodbye")
// }


let userConfirm = confirm("would you like to enter a number?")
let usernumber;
if(userConfirm) {
    usernumber = prompt("what is your number")
    if (isEven(usernumber)) {
        alert("this number is even")
    } else {
        alert("the number is odd")
    }

    alert("the number plus 100 equals:" + add100(usernumber))


    if (isPos(usernumber)) {
        alert("the number is positive")
    } else {
        alert("the number is negative")
    }
}

function isEven(num){
    return num % 2 === 0
}

function add100(num){
    return parseFloat(num) + 100
}

function isPos(num){
    return num > 0
}






// let enter = confirm("would you like to enter a number?")
//
// if(enter == true ){
//   let numEnter = prompt("What is your number?")
//    let number = Number(numEnter)
//     let plus100 = number + 100
//    alert("this number plus 100 is " + plus100)
//
//     function oddEven(numbered) {
//     if (numbered % 2 == 0) {
//         return ("even.");
//     } else {
//         alert("odd.");
//     }
// }
//    alert("this number is " + oddEven(number))
//     function posNeg(numbers){
//       if (Math.sign(numbers) == 1){
//           return("positive")
//       } else {
//           alert("negative")
//       }
//     }
//    alert("this number is " + posNeg(number))
// } else if (enter == false){
//     alert("goodbye")
// }

// let number = prompt("give me a number")
//
// if (isNaN(number)){
//     alert("this is not a number!")
// } else {
//     alert("your number is " + number )
// }



