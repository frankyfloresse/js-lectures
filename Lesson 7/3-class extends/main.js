// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting() {
//         return `hello my name is ${this.name}`;
//     }
// }

// let user = new User('vasya', 31);
// console.log(user);
//
// console.log(user.greeting());


// class User {
//
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//
//     static greeting() {
//         console.log(this);
//         console.log(this.age);
//         return `hello my name is ${this.username}`; //hello my name is undefined
//     }
// }
//
// console.log(User.greeting());


// class User {
//
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//
//     work() {
//         return `work in process`
//     }
// }
//
// class Customer extends User {
//
//     constructor(username, age, password) {
//         super(username, age);
//         this.password = password;
//     }
//
//     // work() {
//     //     return super.work()
//     // }
//
//     work() {
//         return 'qwerty'; //overwritten method
//     }
//
//     foobar() {
//         return '123456789';
//     }
// }
//
// let customer = new Customer('vasya', 31, '111');
// console.log(customer);
//
// console.log(customer.work());
// console.log(customer.foobar());


//наслідування в стандартній джс функціональній конструкції
function User(name, age) {
    this.name = name;
    this.age = age;
}

function Customer(name, age, password) {
    User.apply(this, arguments);
    // User.apply(this, [name, age]);
    this.password = password;
}

let customer = new Customer('vasya', 31, '1111');
console.log(customer);

//наслідування в дж не існує як і ооп - це все псевдообгортки


