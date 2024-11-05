//примітивні типи даних
// number
// string
//boolean

//дані між собою не звʼязані
let a = 100;
let b = a;
b = b + 10;

console.log(a); //100
console.log(b); //110

//масиви і обʼєкти - силочні типи даних
//якщо присвоємо обʼєкт іншій змінній, а потім ми цю змінну модифікуємо,
// відповідно модифікується і обʼєкт, який ми туди присвоїли

// дані залежні один від одного
let user = {
    name: 'vasya'
}

let user2 = user;
user2.age = 31;

console.log(user); // {name: 'vasya', age: 31}
console.log(user2); // {name: 'vasya', age: 31}

