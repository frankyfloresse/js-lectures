let arr = [10, 20];

// console.log(typeof arr); //object
// console.log(typeof {}); //object
//
// //перевірка чи є масив масивом
// console.log(Array.isArray(arr)); //true
//
//
// arr[arr.length] = 100; //додати вкінець - [10, 20, 100]
// console.log(arr);

// //Додати новий елемент в кінець масиву - змінюємо оригінальний масив, а не повертаємо новий масив
// arr.push(10000);
// console.log(arr); //[10, 20, 1000]

//Видалити елемент з кінця масиву - змінюємо оригінальний масив, а не повертаємо новий масив
// arr.pop(); // [20] - повертає значення, яке вирізали. видалений елемент можна кудись передати
// console.log(arr);//[10]

//Додати щось напочаток масиву
// arr.unshift('!!!!');
// console.log(arr); //['!!!', 10, 20]

// //Видалити напочатку елемент
// arr.shift();
// console.log(arr);//[20]

// let str = '';
// for (const arrElement of arr) {
//     str += arrElement + '; '
// }
// console.log(str);

//Зробити стрінгу із масива, не мутірує
// let join = arr.join('-');
// console.log(join); //10-20
// console.log(arr);// [10, 20]

let nums = [11, 22, 33, 44, 55];

//Зʼєднати декілька масивів
let concat = arr.concat(nums);
console.log(concat);//[10, 20, 11, 22, 33, 44, 44]
// console.log(arr); //[10, 20]

//Записати значення масива у зворотньому порядку
//Не використовують - краще зробити цикл що виводить значення в зворотньому напрямку
// console.log(nums.reverse()); //[33, 22, 11]

//Вирізати в новий масив (з 0 індексу по 3 не включно), початковий масив concat не змінюється
// let data = concat.slice(0, 3);
// console.log(data); //[10, 20, 11]

// let splice = concat.splice(0);
// console.log(splice); //скопіюємо масив
// console.log(splice === concat); //false

// let splice = concat.splice(0, 2, 'qwerty'); // 0 - точка з якої починаємо видалення, 2 - кількість елементів які видаляємо, 'qwerty' - що вставити замість видаленого
// console.log(splice); //[10, 20]
// console.log(concat); //['qwerty', 11, 22, 33] - мутірує оригінальний масив

// console.log(concat.indexOf(11)); //індекс 2
// concat.splice(concat.indexOf(11), 1);
// console.log(concat); //масив concat без значення 11 [10, 20, 22, 33, 44, 55]

console.log(concat.includes(11)); //true
console.log('hello'.includes('ll')); //true


