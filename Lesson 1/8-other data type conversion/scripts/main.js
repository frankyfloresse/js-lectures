// typeof

let n = 100;
let s = 'asd';
let b = true;

// console.log(typeof n); //return STRING value
// console.log(typeof s);
// console.log(typeof b);
//
// let arr = [11, 23, 33, true];
// let user = {
//     name: 'vasya',
//     age: 31,
// }
//
// console.log(typeof arr); //object
// console.log(typeof user); //object
//
// function asd() {
//
// }
// console.log(typeof asd); //function , but it's is object in js

let x;
console.log(x); //undefined - for variable without any value;
console.log(typeof undefined); //undefined

console.log(null); //null - equals to nothing
console.log(typeof null);// object

console.log(NaN);// NaN - you're trying to perform a math operation with a string
console.log(typeof NaN);// number
console.log(1 / 'asd');// NaN

console.log(!!100);//true
console.log(!!-100);//true
console.log(!!'asd');//true

console.log(!!0);//false
console.log(!!'');//false
console.log(!!null);//false
console.log(!!undefined);//false

console.log(!!'0');//true
console.log(!!' ');//true






