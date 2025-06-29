// function
// function sum(a, b) {
//   return a * b;
// }
// console.log(sum(3, 5));

// function greet(name) {
//   console.log("hi " + name + " sir wallcame back");
// }
// greet("himanshu");
// arrow function

// let sum = (a,b) =>{
//     return a * b;
// }

// console.log(sum(2,4));

// ! Question 1: Calculator Function
// ! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation.
//  The function should support addition, subtraction, multiplication, I and division.

// function calculator(num1, num2, oparaetor) {
//   let result;

//   switch (oparaetor) {
//     case "+":
//       return num1 + num2;

//     case "-":
//       return num1 - num2;

//     case "*":
//       return num1 * num2;

//     case "/":
//       if (num2 === 0) {
//         return "0 is not allowed";
//       } else {
//         return num1 / num2;
//       }

//     default:
//       return "no operator Founded place enter the operator ";
//   }
// }

// console.log(calculator(2, 0, "/"));

// let  calculator = (num1, num2, oparaetor) => {
//     let result;

//     switch (oparaetor) {
//       case "+":
//         return num1 + num2;

//       case "-":
//         return num1 - num2;

//       case "*":
//         return num1 * num2;

//       case "/":
//         if (num2 === 0) {
//           return "0 is not allowed";
//         } else {
//           return num1 / num2;
//         }

//       default:
//         return "no operator Founded place enter the operator ";
//     }
//   }

//   console.log(calculator(2, 0, "/"));

// ! Reverse a String:
// ! Write a function to reverse a given string without using built-in reverse methods.\

let IsReverse = (str) => {
  let reverse = "";
  for (let i = str.length -1; i > -1; i--) {
    reverse = reverse + str[i];
  }
  
  return reverse;
};

console.log(IsReverse("Himanshu Ghorai"));
