function showMultiplicationTable(input){
    for (var i = 0; i <= 10; i++)
        console.log(`${input} x ${i} = ${input * i}`)
    }


let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) ;

    for (let i = 0; i < 10; i++){
       if (randomNumber % 2 === 0) {
           console.log(`${randomNumber} is even`)
       } else {
           console.log(`${randomNumber} is odd`)
       }
}


for (let i = 0; i < 9; i++) {
    let number = i + 1;
    let result = number.toString()

    for (let j = 1; j <= i; j++) {
        result = result + number;

    }
    console.log(result)
}

// for (let i = 0; i < 9; i++){
//     let answer = String(i + 1).repeat(i + 1);
// console.log(answer)
// }

for(let i = 100; i >= 5; i = i - 5){
    console.log(i)
}



