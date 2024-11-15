let str = 'hello world';
console.log(str);
// console.log(str[0]); //h - стрінга під капотом це масив символів

// for (const strElement of str) {
//     console.log(strElement);
// }

// let s = new String('dfghjkl');
// console.log(typeof s); // object

// let s = str.concat('111');
// console.log(s); //hello world111, початкова стрінга не змінена

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//
// console.log(str.startsWith('hel')); //true or false
// console.log(str.endsWith('en')); //false
//
// //обрізати з початкового індексу до не включаючи другого індексу
// console.log(str.substring(0)); //hello world
// console.log(str.substring(0, 7)); //hello w (7 не включний)
//
// //під яким індексом знаходиться літера
// //знаходить тільки перше сходження, наступні одинакові літери воно не включає
// console.log(str.indexOf('o')); //4
// console.log(str.lastIndexOf('o')); //7
// console.log(str.indexOf('o', 5)); //7 - пошук від 5 індексу

//Повернути за індексом літеру, яка знаходиться там
// console.log(str.charAt(8)); //r

//Замінити літеру, але тільки перше входження
// console.log(str.replace('e', '!')); //h!llo world
// console.log(str.replaceAll('o', '!')); //hell! w!rld

//по якомусь певному символу розділити на частини - повертає масив
console.log(str.split(' ')); //['hello', 'world']
console.log(str.split('o'));// ['hell', 'w', 'rld']
