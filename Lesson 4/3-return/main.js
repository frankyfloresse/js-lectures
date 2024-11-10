// let r1 = 10 + 20;
// let r2 = 20 + 22;

// function calc(a, b) {
//     let result = a + b; //не записує нікуди значення
// }
//
// let r1 = calc(10, 20);
// let r2 = calc(20, 22);
// console.log(r1, r2); //undefined, undefined


// function calc(a, b) {
//     let result = a + b;
//     return result;
// }
//
// let r1 = calc(10, 20);
// let r2 = calc(20, 22);
// console.log(r1, r2); //30, 32

// function percentage(sum, per) {
//     return sum / 100 * per;
// }
//
// function tax(sum) {
//     return sum - percentage(sum, 20) - percentage(sum, 1.5);
// }

// function tax(sum) {
//     let pdv = sum / 100 * 20;
//     let warTax = sum / 100 * 1.5;
//     // let result = sum - pdv - warTax;
//     // return result; //результат відпрацювання функціїї можна використовувати далі в коді
//
//     return sum - pdv - warTax;
// }

// let number = tax(10000);
// console.log(number);


function userFilter(users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 30) {
            // console.log(user);
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}

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

let filter = userFilter(users); //можна далі використовувати ці дані в коді
console.log(filter);