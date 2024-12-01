// // resolve - дозволяє перекидати інфу з одного промісу на інший
// // reject - перекидаємо інфу, коли сталася якась помилка - передає помилку в блок catch, який повинен її відхоплювати

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let x = 1;
//         console.log(x);
//         resolve(x);
//     }, 1000);
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++;
//             console.log(value);
//
//             resolve(value);
//             // throw new Error('qwerty'); //все рівно виконається наступний then
//         }, 1000);
//     });
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++;
//             console.log(value);
//             resolve(value);
//         }, 1000);
//     });
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let x = 1;
//         console.log(x);
//         resolve(x);
//     }, 1000);
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             value++;
//             console.log(value);
//
//             if (true) {
//                 reject('qwerty'); //виконання коду перейде в catch
//             } else {
//                 resolve(value);
//             }
//
//         }, 1000);
//     });
// }).catch(reason => {
//     console.log(reason);
// });


new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = 1;
        console.log(x);
        resolve(x);
    }, 1000);
}).then(value => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            value++;
            console.log(value);

            if (false) {
                reject('qwerty');
            } else {
                resolve(value); //виконання коду оминає catch і переходить до наступного then
            }
        }, 1000);
    });
}).catch(reason => {
    console.log(reason);
}).then(value => {
    console.log(value);
});

//завжди буде конкретне тз, що потрібно зробити.
// будемо обробляти асинхронну операцію, в ній перевіряти якісь певні дані,
// якщо ці дані не відповідають певній дійсності, то робити reject,
// якщо відповідають дійсності, то робити resolve
