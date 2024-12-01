//сховище в браузері від 2 до 10мб. Область привʼязується до певного сайту і дозволяє зберегти в неї інформацію, яка буде переживати завантаження або закриття сайту
// localStorage.setItem('asd', 'qwe'); //додати інфу в localStorage по назві ключа

// localStorage.getItem('asd'); //дістати інфу з localStorage по назві ключа
// localStorage.clear(); //почистити localStorage
//
// //зберегти всередину localStorage обʼєкти
// // localStorage.setItem('user', {id: 1, name: 'kokos'}); // value [object object], бо обʼкт буде переганятичя через toString()
// localStorage.setItem('user', JSON.stringify({id: 1, name: 'kokos'})); //{"id":1, "name":kokos"}

//додати нове значення до обʼєкту, який все існує в localStorage
// let userJSON = localStorage.getItem('user');
// console.log(userJSON); //{"id":1,"name":"kokos"}

// let user = JSON.parse(userJSON);
// console.log(user);//{id: 1, name: 'kokos'}

// user.age = 31;
// console.log(user);//{id: 1, name: 'kokos', age: 31}

// // let stringify = JSON.stringify(user);
// // localStorage.setItem('user', stringify);

// localStorage.setItem('user', JSON.stringify(user));

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// localStorage.setItem('users', JSON.stringify(users));

let usersJSON = localStorage.getItem('users');
let users = JSON.parse(usersJSON);
users.push({});
localStorage.setItem('users', JSON.stringify(users));

localStorage.clear();