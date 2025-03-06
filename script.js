// // console.log("Hello, World!");
// // console.log("Hi Himanshu !");

// // var MyAge = 23;
// // console.log(MyAge);

// // var my_firstName = "Himanshu";
// // console.log(my_firstName);

// // var _lastName$ = "Ghorai";
// // console.log(_lastName$);

// // // var 123myage = 23;
// // // console.log(123myage);  //Invalid or unexpected token

// // var $cityName = "Kolkata";
// // console.log($cityName);

// // var my@Email = "himanshughorai000@gmail.com";
// // console.log(my@Email); //Invalid or unexpected token

// // data types in javascript

// //---primitive data types
// // 1. Number
// // 2. String    // " " or ' ' or ` `
// // 3. Boolean   // true or false
// // 4. Undefined // undefined
// // 5. Null      // null
// // 6. Object    // object
// // 7. Symbol    // symbol
// // 8. BigInt    // BigInt

// //---non-primitive data types
// // 1. Array
// // 2. Object
// // 3. Function

// var myAge = 23;
// console.log(typeof(myAge)); //number

// var myName = "Himanshu";
// console.log(typeof(myName)); //string

// var isStudent = true;
// console.log(typeof(isStudent));     //boolean

// var myCity = null;
// console.log(typeof(myCity));    //object

// var myCar = undefined;
// console.log(typeof(myCar));

// var myObject = {name: "Himanshu", age: 23};
// console.log(typeof(myObject));

// var mySymbol = Symbol("This is my Symbol");
// console.log(typeof(mySymbol));

// var myBigInt = 1234567890123456789012345678901234567890n;
// console.log(typeof(myBigInt));

// var myArray = [1, 2, 3, 4, 5];
// console.log(typeof(myArray));

// var myFunction = function(){
//     console.log("This is my function");
// }
// console.log(typeof(myFunction));

// // Boolean
// var isRain = true
// console.log(isRain);

// number convarsion to boolean
// var myNumber = 1;
// console.log(Boolean(myNumber));

// string convarsion to number to string

// var myString = 25;
// console.log(typeof(myString));
// console.log(typeof String(myString));
// console.log(typeof (myString+""));

// convarton of string to number;

// var num = "33";

// console.log(typeof(num));
// // console.log(typeof Number(num));
// console.log(typeof +num);

// parseInt and parseFloat

// var myNumber = "3.14";
// console.log(parseInt(myNumber));// output 3;

// console.log(isNaN("myNumber")); //output true

// console.log(10 + "30");

// expraction & cndisation & oparator

// var myAge = 23; = is assignment operator;

// var nun = "himu" / 2;
// console.log(nun); //output NaN

// var num2 = 0.1 + 0.2;
// console.log(num2); //output 0.30000000000000004

// equal to defination
// == equal to
// === equal value and equal type
// != not equal
// !== not equal value and not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// logical oparator

// && and

// var x = 10;
// var y = 20;

// console.log(x > 5 && y < 30); //output true

// || or
// var a = 10;
// var b = 20;

// // ! not
// console.log(a > b);

/* ! Q: Write a program that determines if a person is eligible
to drive based on their age being greater than or equal to 18
and havin a valid driver's license ? */

var age = 18;
var headDrivinglinces = true;
// age > 18
// age == 18
console.log(age >= 18 && headDrivinglinces == true);    //output true
