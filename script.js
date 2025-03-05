// console.log("Hello, World!");
// console.log("Hi Himanshu !");

// var MyAge = 23;
// console.log(MyAge);

// var my_firstName = "Himanshu";
// console.log(my_firstName);

// var _lastName$ = "Ghorai";
// console.log(_lastName$);

// // var 123myage = 23;
// // console.log(123myage);  //Invalid or unexpected token

// var $cityName = "Kolkata";
// console.log($cityName);

// var my@Email = "himanshughorai000@gmail.com";
// console.log(my@Email); //Invalid or unexpected token


// data types in javascript


//---primitive data types
// 1. Number
// 2. String    // " " or ' ' or ` `
// 3. Boolean   // true or false
// 4. Undefined // undefined
// 5. Null      // null
// 6. Object    // object
// 7. Symbol    // symbol
// 8. BigInt    // BigInt


//---non-primitive data types
// 1. Array
// 2. Object
// 3. Function


var myAge = 23;
console.log(typeof(myAge)); //number

var myName = "Himanshu";
console.log(typeof(myName)); //string

var isStudent = true;
console.log(typeof(isStudent));     //boolean

var myCity = null;
console.log(typeof(myCity));    //object

var myCar = undefined;
console.log(typeof(myCar));

var myObject = {name: "Himanshu", age: 23};
console.log(typeof(myObject));

var mySymbol = Symbol("This is my Symbol");
console.log(typeof(mySymbol));

var myBigInt = 1234567890123456789012345678901234567890n;
console.log(typeof(myBigInt));

var myArray = [1, 2, 3, 4, 5];
console.log(typeof(myArray));

var myFunction = function(){
    console.log("This is my function");
}
console.log(typeof(myFunction));


