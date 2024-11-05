let user = {
    id: 1,
    name: 'vasya',
    age: 31
}

// console.log(user);
// console.log(user.id);
// console.log(user['age']);

//use[age1], якщо назва без лапок, то це окрема змінна, де лежить назва ключа
// let age1 = 'name';
// console.log(user[age1]);

let user1 = {
    id: 1,
    name: 'vasya',
    age: 31,
    skills: ['html', 'js', 'java'] // 0, 1, 2
}

// //виведу весь масив
// console.log(user1.skills);
//
// //хочу вивести 'java'
// console.log(user1.skills[2]);

let user2 = {
    id: 1,
    name: 'vasya',
    age: 31,
    skills: ['html', 'js', 'java'], // 0, 1, 2
    wife: {
        name: 'olya',
        age: 28
    }
}

//Виведу всі значення вкладеного обʼєкта - звертаюся до ключа
console.log(user2.wife);

//Виведу одне кокретне значення вкладеного обʼєкта - звертаюся до ключа
console.log(user2.wife.name);

