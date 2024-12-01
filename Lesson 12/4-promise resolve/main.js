//багато послідовних асинхронних операцій, яка знаходиться одна в одній - callback hell - працювати з подібною штукою незручно
//проміси - це обгортка яка дозволяє леше працювати з подібними речами
// setTimeout(() => {
//     let x = 1;
//     console.log(x);
//     setTimeout(() => {
//         x++;
//         console.log(x);
//         setTimeout(() => {
//             x++;
//             console.log(x);
//         }, 1000);
//     }, 2000);
// }, 1000);

// new Promise((resolve) => {
//     setTimeout(() => {
//         let x = 1;
//         console.log(x);
//     }, 1000);
// }).then((value) => {
//     new Promise(resolve => {
//         setTimeout(() => {
//             console.log(x); //нічого виводитися не буде, оскільки після then йде нова функція зі своєю областю видимості, а для x не задали ніякого значення
//         })
//     })
// });

//проміси потрібні щоб позбавитися callback hell
//проміс не вирішує проблем з процесом обробки асинхронних операцій, він вирішує візуальну проблему і дозволяє працювати з асинхронними діями в більш зручному варіанті
new Promise((resolve) => {
    setTimeout(() => {
        let x = 1;
        console.log(x);
        resolve(x); //перекидаємо область видимості x на наступний then
    }, 1000);
})
    .then(x => {
        return new Promise(resolve => {
            setTimeout(() => {
                x++;
                console.log(x); //2
                resolve(x);
            }, 1000)
            // return undefined;
        });
    })
    .then(x => { //
        return new Promise(resolve => {
            setTimeout(() => {
                x++;
                console.log(x);
                resolve(x);
            }, 1000);
        });
    })
    .then(x => {
        return new Promise(resolve => {
            setTimeout(() => {
                x++;
                console.log(x);
            }, 2000);
        })
    });