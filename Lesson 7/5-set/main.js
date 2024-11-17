// let set = new Set();
// set.add('asd');
// set.add('qwe');
// set.add('asd');//значення яке повторюється не включається в обʼєкт
// set.add('xxx');
// // console.log(set);
// //
// // console.log(set.has('asd')); //true
//
// set.delete('xxx');
// // console.log(set);
// //
// // console.log(set.size);//2
//
// set.forEach(value => console.log(value));
//
// let arrayFromSet = Array.from(set); //перетворити на масив значень
// console.log(arrayFromSet);// ['asd', 'qwe']
// console.log(arrayFromSet === set);//false

let set = new Set([11, 22, 33, 44, 11, 22, 55]); // { 11, 22, 33, 44, 55 }
console.log(set);
let numbers = Array.from(set); // [ 11, 22, 33, 44, 55 ] - сформувався масив унікальних значень
console.log(numbers);