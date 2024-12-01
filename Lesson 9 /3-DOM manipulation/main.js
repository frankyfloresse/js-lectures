let target = document.getElementById('target');
// console.log(target.innerText);
// target.innerText = 'hello world!';
// target.style.background = 'silver'; //робить інлайн стилі - <div id="target" style="background: silver;">

// console.log(target.classList); //повертає список всіх класів елемента - псевдомасив DOMTokenList(3) ['lorem', 'ipsum', 'lalala', value: 'lorem ipsum lalala']
// target.classList.add('foo'); //додамо новий клас foo - class="lorem ipsum lalala foo"
//
// console.log(target.classList.item(0)); //витягнути певний клас за певним індексом - lorem
// // console.log(target.classList.keys());//ключі класів які можна ітерувати
//
// console.log(target.classList.contains('bar')); //false - перевірити чи існує таки клас - повертає true/false
// console.log(target.classList.contains('foo')); //true
//
// console.log(target.classList.toggle('bar')); //якщо клас bar існує в переліку -його виключти із списку, але якщо відпочатку такого класу не існувало то я його додам - class="lorem ipsum lalala foo bar"
// console.log(target.classList.toggle('foo')); //class="lorem ipsum lalala bar"

// console.log(target.getAttribute('xxx')); //???, якщо атрибут відсутній то буде - null
// console.log(target.getAttribute('id')); //target
// console.log(target.getAttribute('class')); //lorem ipsum lalala
// console.log(target.getAttribute('style')); //background: silver;

// target.setAttribute('id', 'qwerty'); //поміняє значення id з "target" на "qwerty"

// console.log(target.previousElementSibling); //знайти елемент, який стоїть до того елемента з яким ми зараз працюємо - <h1>after</h1>
// console.log(target.nextElementSibling); //<h2>before</h2>

// console.log(target.children);//знайти всі дочірні елементи - HTMLCollection(2)[b, span]
// console.log(target.childNodes); //NodeList(7)[text, comment, text, b, text, span, text] - пробіл це також текст в нод узлі

// target.innerText = '<b>qwerty</b>'; //тег <b> сприймається як текст і виводиться посимвольно на сторінку
// target.innerHTML = '<b>qwerty</b>'; //вводиться як частина html розмітки

// console.log(target.outerHTML); //повертає обгортку - батьківський елемент з яким працюємо

//Якщо немає можливості доступитися доелемента через getElementById - робимо колекцію через getElementsByClassName, а потім ітеруємо і в процесі ітерацію маніпулюємо елементами
// let collectionOfDiv = document.getElementsByClassName('point');
// for (const divElement of collectionOfDiv) {
//     divElement.innerText = 'qwerty';
//     divElement.classList.add('qqq');
// }






