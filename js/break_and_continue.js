//
//
// while(true){
//     let userNum = prompt("enter a odd number between 1 and 50")
//     userNum = parseFloat(userNum)
//     if(userNum % 2 === 1 && userNum <= 50 && userNum >= 1 ){
//         for(let i = 1; i <= 50; i+= 2){
//             if ( i === userNum){
//                 continue
//             } else {
//                 console.log(i)
//             }
//         }
//         break;
//     }
// }


let userNum = prompt("choose a number")

for(let i = 1; i <= 50; i = i + 2){
    if(i == userNum){
        console.log(`skipp this number : ${i}`)
    } else {
        console.log(`Here is a odd number :${i}`)
    }





}


