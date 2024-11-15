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

//нічого не повертає, три аргументи - value, index, array. array - дуже рідко використовуємо.
// users.forEach(function (value) {
//     console.log(value);
// });

//один аргумент не беремо в круглі дужки
// users.forEach(value => console.log(value));

//ручна фільтрація
// let a = [];
// for (const user of users) {
//     if (user.age > 29) {
//         a.push(user);
//     }
// }
// console.log(a);

//метод масива filter, повертає булеве значення
// let filteredUsers = users.filter(value => {
//     return value.age > 30;
// });

// //скорочений запис
// let filteredUsers = users.filter(value => value.age > 30);
// console.log(filteredUsers);
// console.log(users); //не змінений

// let mapedUsers = users.map((value, index) => {
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     };
//
//     return newUser;
// });

// let mapedUsers = users.map((value, index) => {
//     return {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1,
//     };
//
// });
//
// let mapedUsers = users.map((value, index) => {
//     return {...value, id: index + 1}; //spread оператор
// });
//
// console.log(mapedUsers);

// let find = users.find(value => value.name === 'max');
// console.log(find);// якщо два юзери з іменем max, то знайде тільки першого
//
// let every = users.every(value => value.status); //якщо всі елементи мають status true, то поверне true. якщо хоча б один елмент має status false, то поверне false
// let every = users.every(value => value.status === true); //надлишкова перевірка
// console.log(every);

// let some = users.some(value => value.status);
// let some = users.some(value => value.status === true); //надлишкова перевірка
// console.log(some);//якщо хоча б один із елементів має status true, то поверне true. якщо жоден елемент не має status true, то поверне false

// let sort = users.sort((a, b) => {
//     // return a.age - b.age;
//     return b.age - a.age; //сортування в зворотному напрямку
// });

// let sort = users.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//
//     if (a.name < b.name) {
//         return -1;
//     }
//
//     if (a.name === b.name) {
//         return 0;
//     }
// });

// //у зворотному напрямку
// let sort = users.sort((a, b) => {
//     if (a.name < b.name) {
//         return 1;
//     }
//
//     if (a.name > b.name) {
//         return -1;
//     }
//
//     if (a.name === b.name) {
//         return 0;
//     }
// });
// console.log(sort);

let reduceArr = users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }
    console.log(accumulator);
    return accumulator;

}, {statT: [], statF: []});

console.log(reduceArr);