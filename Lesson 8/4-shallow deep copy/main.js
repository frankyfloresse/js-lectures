// let user = {
//     name: 'vasya',
//     skills: ['html', 'js'],
// };

//через spread - поверхнева копія, якщо всередині обʼєкта або масива є вкладеність, она буде копіюватися за посиланням
// let userClone = {...user};
// console.log(user === userClone); //false
// console.log(user.skills === userClone.skills); //true - однакові не по наповненню, а їх посиланні однакові

//наслідки shallow copy
// userClone.skills.push('css');
// console.log(userClone); // skills: ['html', 'js', 'css]
// console.log(user); // skills: ['html', 'js', 'css]

//deep copy
// let s = JSON.stringify(123);
// console.log(123);
// console.log(typeof s); //string

// let user = {
//     name: 'vasya',
//     skills: ['html', 'js'],
// };
//
// // let s = JSON.stringify(user); //convert to json - формат для передачі даних - перетворює обʼєкт на стрінгу
// // console.log(s); // тип json - javascript object notation, {"name": "vasya", "skills" :["html", "js"]}
//
// // let parse = JSON.parse('123');
// // console.log(typeof parse); //number
//
// let userJsonClone = JSON.stringify(user);
// console.log(userJsonClone); //{"name": "vasya", "skills": ["html","js"]}
//
// let parse = JSON.parse(userJsonClone);
// console.log(parse); //{name: 'vasya', skills: ['html', 'js']}
// console.log(user); //{name: 'vasya', skills: ['html', 'js']}
// console.log(user === parse); //false
// console.log(user.skills === parse.skills); //false - зробили повноцінний клон обʼєкта

// let user = {
//     name: 'vasya',
//     skills: ['html', 'js'],
//     greeting: function () {
//     },
// };

//json засіб передачі інфи, а не поведінки
//якщо робити deep copy, то функції не будуть скопійовані в інший обʼєкт
// let userJsonClone = JSON.stringify(user);
// let parse = JSON.parse(userJsonClone);
// console.log(parse); //{name: 'vasya', skills: ['html', 'js']}
// console.log(user); //{name: 'vasya', skills: ['html', 'js'], greeting: ƒ}

//інші варіанти копіювання
let user = {
    name: 'vasya',
    skills: ['html', 'js'],
    greeting: function () {
    },
};

let assign = Object.assign({}, user);
console.log(assign); //{name: 'vasya', skills: ['html', 'js'], greeting: ƒ}
console.log(assign === user); //false
console.log(assign.skills === user.skills); //true

//повноцінна копія (але без функцій) через JSON.stringify(obj)
















