// function foo() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then(data => {
//             console.log(data);
//         });
// }
//
// foo();

async function foo() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await response.json();

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json());
    console.log(users);
    console.log(posts);

}

foo();//возвращает promise

