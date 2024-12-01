// //spread - можемо копіювати один обʼєкт в інший, але вони будуть незалежні один від одного

// let user = {
//     name: 'vasya',
//     age: 123
// };

// let user2 = user; //user2 буде являтися самим user
//
// let user3 = {
//     name: 'vasya',
//     age: 123
// };
//
// // user2.age = 100;
// // console.log(user); //age: 100, name: "vasya"
//
// console.log(user === user2); //true - порівняння двиться на їх посилання, а не внутрянку
// console.log(user === user3); //false - різні посилання, хоча і код всередині однаковий

//скопіювати обʼєкт не по посиланню, а щоб став другий незалежний обʼєкт
// let user = {
//     name: 'vasya',
//     age: 123
// };
//
// let userCopy = {...user};
// console.log(userCopy);//{name: 'vasya', age: 123}
// console.log(user === userCopy); //false
//
// userCopy.age = 0;
// console.log(userCopy); //{name: 'vasya', age: 0}
// console.log(user); //{name: 'vasya', age: 123}

//копіювати масив
// let nums = [11, 22, 33, 44, 55];
// // let nums2 = nums;
// console.log(nums === nums2); //true - два посилання на один єдиний обʼєкт

let nums = [11, 22, 33, 44, 55];
let nums2 = [...nums];
console.log(nums === nums2); //false - тепер nums2 це копія nums і вони між собою є незалежними









