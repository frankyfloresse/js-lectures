// console.log('qwertyuiolp');
//
// let user = new User('vasya', 31);
// user.greeting = function () {
//     console.log('hi!');
// };
//
// console.log(user);
// user.greeting();
//
// let user2 = new User('zxcvbnm', 12345678);
// console.log(user2);
// user2.greeting(); //error

// console.log(User);
//
// User.prototype.greeting = function () {
//     return `hello my name is ${this.name}`;
// }; //розширюємо функцію конструктор
//
// let user = new User('vasya', 12);
// console.log(user.greeting());

// let user = new User('vasya', 31);
//
// user.greeting = function () {
//     return `hello my name is ${this.name}`;
// };
// console.log(user.greeting());
//
// let user2 = new User('petya', 12345678);
// console.log(user.greeting.apply(user2)); // беремо функціонал: метод greeting з user1 і застосовуємо до user2

//
// let user = new User('vasya', 31);
//
// user.greeting = function (msg, asd) {
//     return `${msg} hello ${asd} my name is ${this.name}`;
// };
// let greeting1 = user.greeting('hello', 'lalala');
// console.log(greeting1);
//
// let user2 = new User('petya', 12345678);
// let greeting2 = user.greeting.apply(user2, ['hi', 'qwerty']);
// console.log(greeting2);

// let greeting3 = user.greeting.call(user2, 'hi', 'olla');
// console.log(greeting3);


//спосіб щоб скопіювати функцію і викликати її від іншого обʼєкта
let user = new User('vasya', 31);
user.greeting = function (msg) {
    return `${msg} my name is ${this.name}`;
};

let user2 = new User('petya', 12345678);
let greetingCopy = user.greeting.bind(user2, 'privet');
// let greetingCopy = user.greeting.bind(user2);
console.log(greetingCopy('asdfghjkl;'));


// let obj = {num: 2};
//
// function add(a, b) {
//     return this.num + a + b;
// }
//
// const resultCall = add.call(obj, 3, 5);
// const resultApply = add.apply(obj, [3, 5]);
// const funcBind = add.bind(obj, 3, 5);
// const resultBind = funcBind();
//
// console.log(resultCall, resultApply, resultBind);








