// let user = {};
// user.foo();//user is not defined

// let user = undefined;
// user.foo();//Cannot read properties of undefined
// user.name;

// let user = undefined;
//
// if (user) { //перевірка на undefined
//     console.log(user.name);
// }

// let user = undefined; //оператор опціональної послідовності - якщо user - undefined or null то до характеристики name навіть звертатися не будуть
// user?.name;//захищати себе від помилки

// let user = {
//     name: {}
// }
// user?.name?.fn;

// let user = {};
// user?.name?.fn;// використовувати, коли розуміюємо що може прийти а може не прийти якась певна інформація
