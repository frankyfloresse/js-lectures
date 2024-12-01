// let nameUser = 'vasya';
// let age = 31;
//
// // let user = {
// //     name: name, //коли характеристика обʼєкту бере своє значення зі змінної, яка називається так само як і характеристика обʼєку, то можна це все записати скорочено
// //     age: age,
// // };
// // console.log(user);
//
// //скорочений запис
// let user = {
//     nameUser, //коли характеристика обʼєкту бере своє значення зі змінної, яка називається так само як і характеристика обʼєку, то можна це все записати скорочено
//     age,
//     foo() {
//         console.log(this);
//     }
// };
// console.log(user);
// user.foo();//this не втрачає свій контекст

//деструктуризація - розібрати user на складові частини і перетворити його характеристики на окремі змінні
// let user = {
//     name: 'vasya',
//     age: 31,
//     foo() {
//         console.log('foo');
//     }
// };
// console.log(user);


// let {age, foo, name} = user; //декомпоную обʼєкт - я з user буду брати конретні властивості name, age, foo
// console.log(name);
// console.log(age);
// foo();
//
// function asd({name}) { //весь обʼєкт який заходить буде ігноруватися, окрім філди name, якщо така філда не існує то буде undefined
//     console.log(name);
// }
//
// asd({a: 'qwertyu', name: 'lola'});

// let user = {
//     name: 'vasya',
//     age: 31,
//     foo() {
//         console.log('foo');
//     }
// };
//
// let {status} = user;
// console.log(status);//undefined, тому що в user нема поля status


// let name = 'vasya';
// let age = 31;
//
// let user = {
//     name, //коли характеристика обʼєкту бере своє значення зі змінної, яка називається так само як і характеристика обʼєку, то можна це все записати скорочено
//     age,
//     foo() {
//         console.log(this);
//     },
//     wife: {
//         name: 'Anna'
//     }
// };
// console.log(user);
// user.foo();//this не втрачає свій контекст
//
// // let {name, age} = user;
// // console.log(name); //Identifier 'name' has already been declared
//
// let {name: userName, age: userAge, wife, wife: {name: wifeName}} = user; //переназвати характеристики, якщо вже є така змінна
// // console.log(name);//31 - з 56 рядка
// // console.log(userName, userAge); //з поля name, age в обʼєкті user
// console.log(wife); //{name: 'Anna'}
// console.log(wifeName); //Anna
//

// let numbers = [11, 22, 33];
//
// // let [a, b] = numbers;
// // let [a, b, c] = numbers;
// // let [a, , c] = numbers;
//
// // let [a, b]  = [11, 22, 33];
// // let [11, 22] = [11, 22, 33]; //якщо розкласти
// console.log(a, c); //11, 33 - проігнорувати елемент масиву

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

//повний запис
// let [user1, user2] = users;
// let {name, age, status} = user1;
// console.log(user1, user2); //vasya, petya

// //або скорочено
// let [{name, age, status}, user2] = users;
// console.log(name, age, status, user2); //vasya 31 false {name: 'petya', age: 30, status: true}

//конфлікт імен
// let {name} = user1;
// let {name} = user2;
// let {name: nameUser1} = user1;
// let {name: nameUser2} = user2;









