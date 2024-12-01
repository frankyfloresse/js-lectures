// //синхрнна операція - код виконується зверху вниз
// console.log('start1');
// console.log('start2');
// console.log('start3');
// console.log('start4');
// console.log('start5');
//
// console.log('end');

//асинхронна операція - функції які виконуються із затримкою, потрібен щоб пітягнути інфу з інших api. еокономить ресурси та клієнтів
//асинхронні операції не блокують виконання синхронного коду
// console.log('start1');
//
// setTimeout(function () {
//     console.log('qwerty')
// }, 1000);
//
// console.log('end');

//вивід - start1, end, qwerty

// console.log(1);
//
// setTimeout(function () {
//     console.log('hi')
// }, 1000);
//
// setTimeout(function () {
//     console.log('hello')
// }, 200);
//
// console.log('2');

//вивід - 1, 2, hello, hi

//callback hell
// setTimeout(function () {
//     console.log('hi1');
//     setTimeout(function () {
//         console.log('hi2');
//         setTimeout(function () {
//             console.log('hi3');
//             setTimeout(function () {
//                 console.log('hi4');
//                 setTimeout(function () {
//                     console.log('hi5');
//                     setTimeout(function () {
//                         console.log('hi6');
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

let x = 1;
setTimeout(function () {
    x = 1000;
}, 1000);

console.log(x); //1