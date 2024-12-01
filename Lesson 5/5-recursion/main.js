//Рекурсія - це коли функція в процесі виконання викликає саму себе
// function foo() {
//     console.log('foo');
//     // foo(); //рекурсія
// }
//
// foo();

//рекурсія - замінник циклу
//в рекурсії завжди має бути умова виходу, щоб він не пішов у вічний цикл
// function iterator(arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) { //умова виходу з рекурсії
//         iterator(arr, i);
//     }
// }
//
// iterator([11, 22, 33], 0);

//розкласти багатовимірний масив на одновимірний масив
//коли невідомий ступінь вкладеності масива/обʼєкта, але хочемо сформувати одновимірний масив
let arr1 = [11, 22, 33, [44, 55], [66, [77, 88]]]; //[11, 22, 33, 44, 55, 66, 77, 88]

function getFlatArray(arr) {
    let flatArr = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            flatArr.push(...getFlatArray(item))
        } else {
            flatArr.push(item);
        }
    }
    return flatArr;

}

console.log(getFlatArray(arr1));


// let innerArray = [];
//
// function flatter(array) {
//     for (const item of array) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         } else {
//             innerArray.push(item);
//         }
//     }
// }
//
// flatter(arr);
// console.log(innerArray);



























