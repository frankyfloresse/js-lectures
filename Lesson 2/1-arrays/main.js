let arr;
arr = [123, 234, -123, 25, 0, true, 'asdfgdjf'];
// console.log(arr);
console.log(arr[0]);
console.log(arr[4]);

//індекс - це arr.length-1
console.log(arr.length);

arr[0] = 'new value';
console.log(arr);

arr[7] = 'okten';
console.log(arr);

//Додати новий елемент в кінець масиву
arr[arr.length] = 1323242;
console.log(arr);

arr[arr.length] = 'sdsdsds';
console.log(arr);