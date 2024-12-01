// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (const {name, username, email} of users) {
//             document.write(`<div>
//                 ${name}, ${username}, ${email}
//             </div>`)
//         }
//     });

// fetch('https://dummyjson.com/products')
//     .then(value => value.json())
//     .then(({products}) => {
//         console.log(products);
//     });

// fetch('https://dummyjson.com/products?limit=10')
//     .then(value => value.json())
//     .then(res => {
//         let {products} = res;
//
//         document.write(`<div>`)
//         for (const product of products) {
//             document.write(`<p>${product.id} ${product.brand}</p>`);
//             document.write(`<p>${product.price}</p>`);
//             document.write(`<img src="${product.thumbnail}">`);
//         }
//         document.write(`</div>`)
//     });

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//     })
// })
//     .then(res => res.json())
//     .then(value => console.log(value));


// //создать DOM структуру для списка products
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(({products}) => {
//
//         for (const {title, price, thumbnail} of products) {
//             let div = document.createElement('div');
//             let p1 = document.createElement('p');
//             p1.innerText = title;
//
//             let p2 = document.createElement('p');
//             p2.innerText = price;
//
//             let img = document.createElement('img');
//             img.setAttribute('src', thumbnail);
//             div.append(p1, p2, img);
//             document.body.appendChild(div);
//         }
//     });

//создать DOM структуру для одного product
// fetch('https://dummyjson.com/products/2')
//     .then(res => res.json())
//     .then(({title, price, thumbnail}) => {
//         let div = document.createElement('div');
//         let p1 = document.createElement('p');
//         p1.innerText = title;

//         let p2 = document.createElement('p');
//         p2.innerText = price;
//
//         let img = document.createElement('img');
//         img.setAttribute('src', thumbnail);
//         div.append(p1, p2, img);
//         document.body.appendChild(div);
//     });

//Limit and skip products
// fetch('https://dummyjson.com/products?limit=10&skip=2')
//     .then(res => res.json())
//     .then(data => console.log(data));


//Add a new product - POST
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         title: 'IPhone',
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data));

//Update a product - PUT/PATCH по id
// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT', /* or PATCH */
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'iPhone Galaxy +1'
//     })
// })
//     .then(res => res.json())
//     .then(console.log);


//Delete a product - DELETE по id
// fetch('https://dummyjson.com/products/1', {
//     method: 'DELETE',
// })
//     .then(res => res.json())
//     .then(data => console.log(data));
