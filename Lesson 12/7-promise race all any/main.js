// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(value => value.json())
//     .then(users => {
//         for (const user of users) {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then(value => value.json())
//                 .then(postOfIteratedUser => {
//                     user.posts = postOfIteratedUser;
//                 });
//             console.log(user);
//         }
//     });

//В якості масива дозволяє передавати асинхронні дії
// Promise.all([])

let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json());

let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json());
//
// Promise.all([users, posts]).then(result => {
//     // let usersArray = result[0];
//     // let postsArray = result[1];
//     let [users, posts] = result;
//
//     for (const user of users) {
//         user.posts = [];
//         for (const post of posts) {
//             if (user.id === post.userId) {
//                 user.posts.push(post);
//             }
//         }
//     }
//     console.log(users);
// });

//в then потрапить той запит, котрий виконався першим
// Promise.race([users, posts]).then(value => console.log(value));

//Отримуємо хоча ю які небудь дані - не гарантується послідовність виконання асинхронних операцій
Promise.any([users, posts]).then(value => console.log(value));