// console.dir(document);
// console.log(document.head);
// console.log(document.head.children); //HTMLCollection(4)[meta, meta, meta, title]

//HTML колекція це псевдомасив, який ітерується як масив, але масивом не являється тому і не має методів масива
// console.log(document.body);
// console.log(document.body.innerHTML); // вся розмітка, що знаходиться в body - <script src="main.js"></script>
// console.log(document.head.innerHTML);

//Пошук елементів за ідентифікатором або класом
//ID - знаходить html елемент по id
// let ul1 = document.body.getElementById('list-1'); //error - document.body.getElementById is not a function - якщо потрібно щось шукати, то пошук від документа або знайденого вами елементу
// let ul1 = document.getElementById('list-1');
// console.log(ul1);

//CLASS - знаходить html колекцію, навіть якщо елемент 1 - то його буде запаковано в колекцію
//щоб дістати кожен окремий елемент потрібно проітерувати його циклом, або звертатися до елемента через індекс
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection); //HTMLCollection(2) [ul#list-1.menu, ul#list-2.menu]
//
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement); //ul#list-1.menu, ul#list-2.menu
// }

//TAG
//Знаходить html колекцію, але пошук безпосередньо по тегу
// let ulList = document.getElementsByTagName('ul');
// console.log(ulList);

// let liList = document.getElementsByTagName('li');
// console.log(liList); //HTMLCollection(10) [li, li, li, li, li, li, li, li, li, li] - знаходить ВСІ <li> всередині документу, що створює проблеми, якщо нам необхідні всі <li> тільки конкретного блоку

//Знайти всі <li>, які знаходяться в id="list-1"
// let list1 = document.getElementById('list-1'); //ul#list-1.menu
// let listLiCollection = list1.getElementsByTagName('li'); //від знайденого блоку робимо пошук конкретних елементів
// console.log(listLiCollection); //HTMLCollection(5)[li, li, li, li, li]


// document.querySelector(); //знаходить тільки один елемент по певному css селектору
// document.querySelectorAll(); //знаходить всі елементи по певному css селектору

// console.log(document.querySelector('ul')); // ul#list-1.menu - перший ul який зустріне в документі
// console.log(document.querySelectorAll('ul')); //список node вузлів - NodeList(2) [ul#list-1.menu, ul#list-2.menu]

// console.log(document.querySelector('.menu')); // знайде тільки перший елемент з класом menu - ul#list-1.menu
// console.log(document.querySelectorAll('.menu')); // знайде всі елементи з класом menu - NodeList(2) [ul#list-1.menu, ul#list-2.menu]

// console.log(document.querySelector('body .menu')); //cелектор

// console.log(document.querySelectorAll('.menu:nth-child(2) > li')); //NodeList(5) [li, li, li, li, li]  - <li> второго блока ul с классом menu
//
// let nodeList = document.querySelectorAll('#list-2 > li'); //NodeList(5) [li, li, li, li, li]
// for (const node of nodeList) {
//     console.log(node); //кожен node вузол по порядку: <li>item 2 1</li>, <li>item 2 2</li>, <li>item 2 3</li>, <li>item 2 4</li>, <li>item 2 5</li>
// }







