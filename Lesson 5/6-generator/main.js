//генератори - один із різновидів функцій, який має множинний return

// function* foo() {
//     yield 100;
//     yield 200;
//     yield 300;
// }
//
// let fooGenerator = foo();
// console.log(fooGenerator);
//
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());

//Можна зробити карточну гру
function* cardsHolder() {
    const cards = [
        {value: 6, suite: 'diamond'},
        {value: 7, suite: 'spade'},
        {value: 8, suite: 'diamond'},
        {value: 9, suite: 'spade'},
    ];

    for (const card of cards) {
        yield card;
    }
}

let cardsHolderGenerator = cardsHolder();
let card1 = cardsHolderGenerator.next();
// console.log(card1.value); //{value: 6, suite: 'diamond'}
console.log(card1);

let card2 = cardsHolderGenerator.next(); //done: false, value: {value: 7, suite: 'spade'
console.log(card2);

let card3 = cardsHolderGenerator.next();
console.log(card3);

let card4 = cardsHolderGenerator.next();
console.log(card4);

let card5 = cardsHolderGenerator.next();
console.log(card5);

