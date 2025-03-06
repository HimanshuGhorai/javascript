// if & else
/*
// ! Requirements:
 If the person is 18 years or older, a citizen, and registered to vote, display a
message saying they are eligible to vote.

 If the person is younger than 18, not a citizen, or not registered to vote,
display a message saying they are not eligible to vote.

 If the person is 18 or older but not a citizen, display a message saying they
are not eligible due to citizenship status.

If the person is 18 or older, a citizen, but not registered to vote, display a
message saying they are not eligible due to registration status.

Extended voting eligibility checker with additional conditions
*/

/*
var age = 8;
var isCitizen = true;
var registered = false;

if (age >= 18) {
  if (isCitizen) {
    if (registered) {
      console.log("eligible to vote.");
    } else {
      console.log("are not eligible due to registration status.");
    }
  } else {
    console.log("are not eligible due to citizenship status.");
  }
} else {
  console.log("are not eligible to vote because of age ");
}

*/
// ! 1: Write a program to check if a number is even or odd.

// var number = 12;

// if (number % 2 === 0 ){
//   console.log(`this is even number`);

// }else{
//   console.log(`htis is odd number`);

// }

// ! 2 : Write a program to check if a number is prime.

// ! 3: Write a program to check if a number is positive, negative, or zero.

var num = -1;

// ====> this is one methode of solution this

// if (num >= 0) {
//   if (num > 0) {
//     console.log(`this number is positive`);
//   } else {
//     console.log(`htis number is zero `);
//   }
// } else {
//   console.log(`htis number is negitive `);
// }

// this is the othor wey

// if (num === 0){
//   console.log(`thsi number is zero `);

// }else if (num > 0 ){

//   console.log(`thsi is positive number `);

// }else {
//   console.log(`this number is nagitive`);

// }

// ==================================

// switch statement

// ==> the switch statement is used ot perform task diffrent  action besed  on different condition

// syntax
//  switch (expression){
//   //case value1
//   break;
//  }

// example

// var day = "friday";

// switch (day) {
//   case "monday":
//     console.log(`thsi is monday`);
//     break;
//   case "friday":
//     console.log(`omg let's have some party today`);
//     break;
//   case "sunday":
//     console.log(` to day we are going to bache `);
//     default :
//     console.log(`no condition match `);

// }

/*
Q: Write a JavaScript switch statement that takes a variable areaOfShapes representing
different shapes, and based on its value, calculates and logs the area of the corresponding
shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle:
use variables a use avariable r as the radius; and for 'Square, ' the provided shape is not recognized, 
log a available. Test your switch statement with and b set to 5 and 10, respectively. Ensure
is logged to the console. use variable a as the side length. If message saying, 'Sorry the shape
 is not areaOfShapes set to 'Square' and sides a that the correct area (25 in this case)
*/

var areaOfshapes = `rectangle`;

var a = 5;
var b = 10;
var result;
switch (areaOfshapes) {
  case `sircle`:
    var r = 2;
    result = 3.142 * (r * r);
    console.log(result);
    break;
  case `square`:
    result = a * a;
    console.log(result);
    break;
  case `rectangle`:
    result = a * b;
    console.log(result);
}

console.log(areaOfshapes);
