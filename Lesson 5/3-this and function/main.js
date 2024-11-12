// let user = {
//     name: 'vasya',
//     greeting: function (msg) {
//         return `${msg} my name is ${user.name}`
//     }
// }
//
// console.log(user.greeting('hi'));

let asd = {
    name: 'vasya',
    age: 31,
    greeting: function (msg) {
        console.log(this);
        return `${msg} my name is ${this.name}` //this це обʼєкт asd, з яким процюємо в даному контексті
    },

    // vitanny: (msg) => `${msg} my age is ${this.age}` //hello my age is undefined
    vitanny: (msg) => `${msg} my age is ${asd.age}` //hello my age is 31
}

console.log(asd.greeting('hi')); //hi my name is vasya - this посилається на поле name обʼєкта asd і тягне звідти інформацію
console.log(asd.vitanny('hello')) //hello my age is undefined - this посилається на глобальний window в якого немає поля age. вихід - звертатися тільки до назви обʼєкта або використовувати звичайну функцію