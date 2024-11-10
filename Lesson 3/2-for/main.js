let users = [
    {name: 'vasya', age: 31, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'kate', age: 31, status: false},
    {name: 'max', age: 31, status: false},
    {name: 'anya', age: 31, status: true},
    {name: 'masha', age: 31, status: false},
    {name: 'dasha', age: 31, status: true},
    {name: 'kris', age: 31, status: false},
    {name: 'dima', age: 31, status: true},
    {name: 'egor', age: 31, status: false},
    {name: 'petya', age: 31, status: false},
];

// console.log(users[0]);
// console.log(users[1]);

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// for (let i = 2; i < users.length; i++) {
//     console.log(users[i]); //ітерація починається від user.name = 'kate'
// }

// for (let i = 0; i < users.length - 1; i++) {
//     console.log(users[i]); //ітерація закінчиться на передостанньому елементі user.name = 'egor'
// }

// // debugger;
// for (let i = 2; i < users.length - 1; i++) {
//     console.log(users[i]); //ітерація закінчиться на передостанньому елементі user.name = 'egor'
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<h3>${user.name} - ${user.age} - ${user.status}</h3>`)
// }

// for (let i = 0; i < users.length; i++) {
//     let user = users[i]; // шаблон itar
// }

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Delicious-Fruit-Juices-Orange-Kiwi-and-Strawberry.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://lornahealth.com/app/uploads/2019/07/tomato-juice-recipe.jpg'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.allrecipes.com/thmb/Jjow_QEim_LekakxVeENF35dTWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-242148-Ginger-Turmeric-Herbal-Tea-2x1-0075ecdaa2684f0cba1885b95c52df72.jpg'
    },
]; //DB

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product);
    document.write(`<div class="target">
        <h2>${product.title} - ${product.price} UAH</h2>
        <img src="${product.image}" alt="img">
    </div>`)
}