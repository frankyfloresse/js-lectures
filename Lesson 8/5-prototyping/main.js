//js - функціональна мова програмування + прототипно орієнтована
// console.log({});
// console.log({}.__proto__);

let base = {
    id: 1,
    name: 'kokos'
};

let copy = Object.create(base); // робимо обʼєкт на основі прототипа

console.log(base);
console.log(copy); //{}, але він не пустий - своїх характеристик немає, але він бере характеристики зі свого пращура
console.log(copy.id); //1
console.log(copy.name); //kokos

console.log(copy.hasOwnProperty('id')); //false - бо id власність його прототипа base

copy.surname = 'foobar';
console.log(copy); //{surname: 'foobar'}
console.log(copy.hasOwnProperty('surname'));//true

copy.id = 1000500;
console.log(copy); //{surname: 'foobar', id: 1000500}
console.log(copy.hasOwnProperty('id'));//true, але id прототипа також зберігається

//негарна практика - створення обʼєкта не через Object.create(base)
let obj = {};
obj.__proto__ = base;
console.log(obj);

//таким чином можна одним махом всі обʼєкти які побудовані на базі іншого обʼєкта замінити
