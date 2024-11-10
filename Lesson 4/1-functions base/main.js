let a = 1;

// document.write(`
//     <div>
//         <h2>juice 123</h2>
//         <p>lorem ipsum 1</p>
//     </div>
// `);
//
// document.write(`
//     <div>
//         <h2>milk 456</h2>
//         <p>lorem ipsum 2</p>
//     </div>
// `);
//
// document.write(`
//     <div>
//         <h2>tea 789</h2>
//         <p>lorem ipsum 3</p>
//     </div>
// `);

function writer(productTitle, price, description) {
    document.write(`
    <div>
        <h2>${productTitle} ${price}</h2>
        <p>${description}</p>
    </div>
`);
}

writer('milk', 32, 'some milk');
writer('meat', 150, 'some meat');

function printerArray(array) {
    for (const item of array) {
        console.log(item);
    }
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

printerArray(users);


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

printerArray(products);








    

