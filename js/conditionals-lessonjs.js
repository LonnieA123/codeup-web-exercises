

//var cities =prompt ('where do you live')


// if (cities == "Boston"){
//     console.log('your here')
// } else if (cities == "San Antonio"){
//     console.log('i guess this works')
// }
// else{
//     console.log('ur in the wrong place')
// }
//
// addNumbers("5")
// function addNumbers(num1){
//
//     if (typeof num1 == "string"){
//         number = parseInt(num1)
//         return number + 2
//     } else {
//         return number + 2
//     }
//
//
// }
//
//
//var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce" || pizzaPreference === "meatballs") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference.toLowerCase() === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }


//let success = true;
// var message;
// if (success) {
//     message = "the operation was successful"
// }
// else {
//     message = 'the operation was not successful '
// }

//let message = success ? "the operation was successful" : "the operation was a failure you died "
//console.log(message)

// switch(pizzaPreference){
//     case "cheese":
//         console.log("cheese is good")
//         break;
//     case "pineapples" :
//             console.log("ew")
//             break;
//     default :
//             console.log("ur boring")
//             break; }

let number = 3;
switch(number) {
    case 1:
        console.log(`the number is ${number}, but it will fall through case 1`)
    case 2:
        console.log(`the number is ${number}, but it will fall through case 2`)
    case 3:
        console.log(`the number is ${number}, but it will fall through case 3`)
    case 4:
        console.log(`the number is ${number}, but it will fall through case 4`)
    console.log("the number came before 5")
break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log("the number came between 5 and 8")
        break;
    default:
        console.log("the number came after 8")
}
