//дескриптори - процес за допомогою якого можна описати як обʼєкт буде виглядати стосовно своїх характеристик
//задати метаінформацію - задати додаткові значення
//інша назва - флаги характеристик

let user = {
    firstName: 'Taras',
    lastName: 'Shevchenko'
};

// console.log(user);
//
// user.firstName = 'qwerty';
// console.log(user);
//
// for (const userKey in user) {
//     console.log(userKey);
// }

//за допомогою дескриптора - можна зробити щоб характеристику не можна було змінювати в обʼєкті, щоб вона не приймала участь в переліку, можна задавати значення по іншому а не user.firstName = 'qwerty'

Object.defineProperty(
    user,
    'id',
    {
        value: 100500, //задати значення
        writable: false, //не можна перезаписати поле
        enumerable: false, //характеристика id не буде під час ітерації
        configurable: false //наступний виклик defineProperty буде неможливий для id
    }
);

console.log(user);
user.id = 100;
console.log(user);

for (const key in user) {
    console.log(key);
}

Object.defineProperty(
    user,
    'id',
    {
        value: 200, //задати значення
        writable: false,
        enumerable: false,
        configurable: false //error - Cannot redefine property: id, якщо configurable: true, то наступний виклик Object.defineProperty для id дасть перезаписати його значення
    }
);
console.log(user);