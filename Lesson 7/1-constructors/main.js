// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
// }
//
// let user1 = new User('qwerty', 123, true);
// console.log(user1);
// let user2 = new User('asdfghjk', 12, false);
// console.log(user2);

// function User(name, age, status, wife) {
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = wife;
// }
//
// new User('qwerty', 123, true, { name: 'qwertyuiop' });

function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
    this.greeting = function () {
        console.log('hi');
    }
}

let user = new User('qwerty', 123, true, 'anna', 28);
console.log(user);
