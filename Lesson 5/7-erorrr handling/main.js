// let a = '';
// let a = '';

// console.log(a);

// user.asd();

//Обробка помилок
// console.log('start'); //виконується
// console.log(a); //error
// console.log('end'); //не виконується


// console.log('start');//виконується
//
// try {
//     console.log(a);
// } catch (e) {
//     console.log(e); //помилка виводить повідомлення в e
// }
//
// console.log('end');//виконується

// console.log('start');//виконується
//
// try {
//     console.log('qwertyuio');
// } catch (e) {
//     console.log(e); //немає помилки, catch не стається бо немає помилки
// } finally {
//     console.log('finally back'); //блок виконається в будь якому випадку
// }
//
// console.log('end');//виконується

// function calc(a, b) {
//     return a / b;
// }
//
// console.log(calc(100, 0)); //Infinity при діленні на нуль, помилки немає

function calc(a, b) {

    //Примусово кинути помилку у випадку додаткової перевірки
    if (b === 0) {
        throw new Error('b is 0');
    }
    return a / b;
}

console.log(calc(100, 0));
