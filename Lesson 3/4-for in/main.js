//обʼкти - асоціативний масив. асоціація між ключем і значенням. за ключем id асоціоване значення 1

// let user = {
//     id: 1,
//     name: 'vasya',
//     status: true,
//     skills: [],
// }

// for (let fieldName in user) { //для перебору обʼєктів
//     // console.log(fieldName); //всі ключі
//     // console.log(user['name']) //'vasya'
//     // console.log(user[fieldName]) //всі value
//     console.log(fieldName, user[fieldName]);// key, value
// }

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

for (const user of users) {
    // console.log(user);

    for (const fieldName in user) {
        console.log(fieldName, user[fieldName]);
    }
    console.log(' ')
}






