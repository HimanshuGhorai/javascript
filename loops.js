// loops

// while loop

// var num = 1 ;

// while (num <= 10 ) {
//     console.log(num);
//     num++;

// }

// do while loop

// var num = 1 ;

// do {
//     console.log(num);
//     num++;

// }while (num <= 10 )

// for loop

// for (var i= 1 ; i <= 10 ; i++){
//     console.log(i);

// }

// ? let's create a table of 5

//         var i = 1

//         for (let i = 0; i <= 10; i++) {
//         // console.log("5 *" + i + " = " + (5 * i));
//         console.log(`5 * ${i} = ${5*i}`);

//  }

//  var num1 = 5;

//  var num2;
//  for (num2 = 1 ; num2<= 10; num2++){
//     if (num1<= 10){
//         console.log(num1 * num2)
//     }
//  }

// var userInput;
// var positiveNumber ;

// do {
//    userInput = prompt(`place Enter Positiove Number`);
//     positiveNumber = parseFloat(userInput)

// } while (isNaN(positiveNumber) || positiveNumber < 0 );
// console.log(positiveNumber);

// calculate this sum of number for 1 to 10 using for loop ?

// var num = 0

// for(var i = 1 ; i <= 10; i++){
//     num = num + i;
// console.log(num);

// }
// console.log(num);

// console.log("10"-"2");

//!1: program To check if a year is a leap year
// ? If a year is divisible by 4 and not divisible by 100, or
// If a year is divisible by 400,
// then it is a leap year. Otherwise, it is not a leap year.

// var year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0){
//     console.log('it is a leap year');

// }else{
//     console.log(`it is not a leap year`);

// }

// **==> 50 qustions about loops

/* 
loops 

----> for loop 
----> while loop 
----> do-while loop 
----> for in loop 
----> for of loop 
*/

// 50 qustino

// 1> print 1 -10 number using for loop ?

// for (var i = 0 ; i <= 10 ; i++){
//     console.log(i);

// }
// The loop starts at 1 (i = 1).
// It runs while i <= 10.
// It increments i by 1 (i++) each time.

// 2> Print numbers from 1 to 10 using a while loop.

// var num = 0
// while (num <= 100) {
// console.log( num ,"num") ;
//     num++
// }

//The loop runs while num is less than or equal to 10.
//num++ increases num by 1 in each iteration.

// 3️> Print numbers from 1 to 10 using a do-while loop.

//     var i = 0
// do{
// i++
// console.log(i);
// }while(i <= 10 )

//4️> Print even numbers from 1 to 20 using a for loop.

// for (let i = 0; i <= 20; i +=2, i++) {
//     console.log(i);
// }

//5> Print odd numbers from 1 to 20 using a while loop.

// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i += 4;
// }

// 6>  Find the sum of numbers from 1 to 100 using a for loop.
// var sum = 0;
// for (let i = 0; i <= 100; i++) {
//   console.log((sum += i));
// }
// 5050

// 7> Find the factorial of a number (e.g., 5!) using a loop.
var num = 5;
var factorial = 1;

for (var i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);

//8️>Reverse a number using a while loop.

let number = 12345;
let Reverse =0 ;


while(number>0){
    let digit = number % 10 ;
    Reverse = Reverse * 10 + digit;
        number = Math.floor(number/10);
}
console.log(Reverse);
