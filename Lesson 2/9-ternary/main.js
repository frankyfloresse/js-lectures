let obj = {
    id: 1,
    name: 'vasya',
    age: 22
}

// let access;
// if (obj.age > 18) {
//     access = true;
// } else {
//     access = false;
// }
//
// console.log(access);

//актуально тільки для присвоєння всередину змінної значення на основі булевої перевірки
//для виконання дії після умови тернарка не підходить

//читається: чи obj.age більше ніж 18? якщо так - записати в змінну access 'yes', якщо ні - записати в змінну access 'no'
let access = obj.age > 18 ? 'Yes' : 'No';
console.log(access);