//callback - можливість однієї функції приймати як аргумент іншу функцію

// function foo(bar) {
//     console.log(bar);
// }
// foo(100);

// function foo(bar) {
//     console.log(bar);
// }

// function h() {
//     return 100;
// }
//
// foo(h());


// foo(function h() {
//     return 100;
// }());

// foo(function () {
//     return 100;
// }());
//
// // --->
// foo(100);

// function foo(bar) {
//     console.log(bar); //виведеться опис функції, бо ми прибрали (), відповідно функція в foo не виконується
// }
//
// foo(function () {
//     return 100;
// });

// function foo(bar) {
//     console.log(bar()); //змістили акцент виконання функції в bar - callback
// }
//
// foo(function () {
//     return 100;
// });

// function calc(a, b, action) {
//     if (action === '+') {
//         return a + b;
//     } else if (action === '-') {
//         return a - b;
//     }
//     ////
// }

function calc(a, b, callback) {
    return callback(a, b);
}


console.log(calc(10, 20, (a, b) => {
    return a + b;
}));

console.log(calc(10, 20, (a, b) => a - b));
console.log(calc(10, 20, (a, b) => a * b));
console.log(calc(10, 20, (a, b) => a / b));




