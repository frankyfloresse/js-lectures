// function foo() {
//     console.log('foo');
//     // foo(); //рекурсія
// }
//
// foo();

//замінник циклу
// function iterator(arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr, i);
//     }
// }
//
// iterator([11, 22, 33], 0);

//коли невідомий ступінь вкладеності масива/обʼєкта, але хочемо сформувати одновимірний масив
let arr = [11, 22, 33, [44, 55], [66, [77, 88]]];

let innerArray = [];

function flatter(array) {
    for (const item of array) {
        if (Array.isArray(item)) {
            flatter(item);
        } else {
            innerArray.push(item);
        }
    }
}

flatter(arr);
console.log(innerArray);