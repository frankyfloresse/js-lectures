//замикання - можливість функції тримати посилання на зовнішній обʼєкт

// function asd() {
//     let x = 10;
//
//     function inner() {
//         return ++x;
//     }
//
//     return inner;
// }

// console.log(asd());
// //Виклик asd() теж саме що і код нижче:
// // console.log(function inner() {
// //     return ++x;
// // })
//
// console.log(asd()());//11

//значення можна запакувати в змінну:
// let foo = asd();
// console.log(foo());


// let user = {
//     name: 'qwertyu',
//     age: 123,
// };
//
// user.age = -1234567;

function userBilder(name, age) {
    let user = {name, age};

    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        }
    }
}

let builder = userBilder('vasya', 31);
// console.log(builder);
// console.log(user); //error
console.log(builder.getAge()); //31
console.log(builder.getName()); //vasya
// builder.setAge(100);
// console.log(builder.getAge()); //100;
builder.setAge(-100);
console.log(builder.getAge());//31, не можна впровадити зміни

