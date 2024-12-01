// // з двоїх асинхронних функцій - першим виконається той, що із меншою затримкою
// //вивід - a, asdf
// setTimeout(() => {
//     console.log('asdf');
// }, 2000);
//
// setTimeout(() => {
//     console.log('a');
// }, 1000);
//


// з двоїх асинхронних функцій - з однаковою затримкою, функції виконуються по порядку
//вивід - asdf, a

// setTimeout(() => {
//     console.log('asdf');
// }, 1000);
//
// setTimeout(() => {
//     console.log('a');
// }, 1000);


// //вивід - 1, 2, 3, asdf, a
// console.log(1);
//
// setTimeout(() => {
//     console.log('asdf');
// }, 1000);
//
// console.log(2);
//
// setTimeout(() => {
//     console.log('a');
// }, 1000);
//
// console.log(3);

//вивід - 1, 2, 3, a, asdf
// console.log(1);
//
// setTimeout(() => {
//     console.log('asdf');
// }, 2000);
//
// console.log(2);
//
// setTimeout(() => {
//     console.log('a');
// }, 1000);
//
// console.log(3);
//
//
// async function getDta() {
//     /// fetch
//     console.log(2)
// }
//
// function onClick() {
//     console.log(1)
//     const data = await getData();
//     console.log(3)
// }

//всі асинхронні функції спроможні використовувати зовнішні змінні як ініціалізаційні значення, але неспроможні на них впливати
// let x = 0;
// setTimeout(() => {
//     x = 1000;
// }, 1000);
//
// console.log(x); //0

// let i = 0;
//
// while (i < 5) {
//     setTimeout(() => {
//         console.log(i); //5 разів 5
//     }, 1000);
//     i++;
// }


// let i = 0;
//
// while (i < 5) {
//     run(i);
//     i++;
// }
//
// //у функції є замикання - можливість функції запамʼятовувати змінну, її зовнішній стан і фіксувати його
// function run(i) {
//     setTimeout(() => {
//         console.log(i); //вивід - 0, 1, 2, 3, 4
//     }, 1000);
// }




