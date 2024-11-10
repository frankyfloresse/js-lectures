let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let user of users) {
    console.log(user)
}

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Delicious-Fruit-Juices-Orange-Kiwi-and-Strawberry.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://lornahealth.com/app/uploads/2019/07/tomato-juice-recipe.jpg'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://www.allrecipes.com/thmb/Jjow_QEim_LekakxVeENF35dTWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-242148-Ginger-Turmeric-Herbal-Tea-2x1-0075ecdaa2684f0cba1885b95c52df72.jpg'
//     },
// ];
//
// for (let product of products) { //перебирає завжди від початку до кінця
//     document.write(`<div class="target">
//         <h2>${product.title} - ${product.price} UAH</h2>
//         <img src="${product.image}" alt="img">
//     </div>`)
// }

// for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     console.log(product);
//     document.write(`<div class="target">
//         <h2>${product.title} - ${product.price} UAH</h2>
//         <img src="${product.image}" alt="img">
//     </div>`)
// }