//Синтаксична помилка, коли оголошуємо змінну яаам існує вже
// let a = '';
// let a = '';

//Якщо сталася помилка - весь наступний скрипт перестає виконуватися
// console.log(a);
// console.log('start'); //не виконується
// console.log('end'); //не виконується


// console.log('start'); //виконується
// console.log(a); //error
// console.log('end'); //не виконується


//Обробка помилок - try/catch
// console.log('start');//виконується
//
// try {
//     console.log(a);
// } catch (error) {
//     console.log(error); //помилка виводить повідомлення в error
// }
//
// console.log('end');//виконується


//finally - виконається в будь-якому випадку (незалежно від того станеться помилка або ні)
//вивід - start, try block, finally back, end
// console.log('start');//виконується
//
// try {
//     console.log('try block');
// } catch (e) {
//     console.log(e); //немає помилки, в catch нічого не залітає
// } finally {
//     console.log('finally back'); //блок виконається в будь якому випадку
// }
//
// console.log('end');//виконується

//Infinity при діленні на нуль, помилки немає
// function calc(a, b) {
//     return a / b;
// }
//
// console.log(calc(100, 0)); //Infinity

//Примусово генерувати помилку при діленні на 0
function calc(a, b) {
    if (b === 0) {
        throw new Error('b is 0');
    }
    return a / b;
}
console.log(calc(100, 0));

//Ловити помилки і обробити, щоб не вивівся в консоль, а виконати якийсь код виходячи із помилки
// try {
//     ///
// } catch(err) {
//     console.log(err);
// } finally {
//     ///
// }

//Кинути помилку, але не можна обробити помилку - alert красний в консоль
//throw new Error();


function registration() {
    try {
        const name = prompt('Fill in your name');
        if (name.length < 5) {
            throw new Error('Invalid name length')
        }

        const age = +prompt('Fill in your age');
        if (age < 18) {
            throw new Error('Invalid age')
        }
    } catch (err) {
        if (err.message === 'Invalid age') {
            alert('You are banned');
        }
        if (err.message === 'Invalid name length') {
            alert('Be carefully')
        }
        console.error(err);
    }
}