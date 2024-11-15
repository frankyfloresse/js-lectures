// function filter(arr, predicate) {
//     let exitArr = [];
//
//     if (predicate === 'хочу парні') {
//         for (const item of arr) {
//             if (item % 2 === 0) {
//                 exitArr[exitArr.length] = item;
//             }
//         }
//     }
//
//     if (predicate === 'хочу непарні') {
//         for (const item of arr) {
//             if (item % 2 !== 0) {
//                 exitArr[exitArr.length] = item;
//             }
//         }
//     }
//
//     return exitArr;
// }

// console.log(filter([11, 22, 33, 44, 55], 'хочу парні'));
// console.log(filter([11, 22, 33, 44, 55], 'хочу непарні'));

function filter(arr, callback) {
    let mass = [];

    for (const item of arr) {
        if (callback(item)) {
            mass[mass.length] = item;
        }
    }
    return mass;
}

// console.log(filter([11, 22, 33, 44, 55], function (item) {
//     return item % 2 === 0;
// }));

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(filter(users, function (user) {
    return user.age !== 30;
}));

