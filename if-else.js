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

if (num === 0){
  console.log(`thsi number is zero `);
  
}else if (num > 0 ){

  console.log(`thsi is positive number `);
  
}else {
  console.log(`this number is nagitive`);
  
}
