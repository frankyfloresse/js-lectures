//Events - комунікація клієнта з сайтом (перезавантаження сторінки, клік в інпуті, водити мишею по сайту, змінити таб)
//Не всі події можна повісити на один і той самий елемент - на div не можна повісити подію onLoad()
//
// let target = document.getElementById('target');
//
// target.onclick = function (event) {
//     console.log('click');
//     console.log(event); //обʼєкт події, який містить всю інформацію проте як цей клік стався і на який елемент він стався
// };
//
// // target.onmousemove = function (e) {
// //     // console.log('move');
// //     // console.log(e);
// //     console.log(e.clientX, e.clientY);
// //     let r = e.clientX;
// //     let g = e.clientX;
// //     let b = e.clientY;
// //
// //     this.style.background = `rgb(${r}, ${g}, ${b})`;
// // };
//
// // target.onclick = function () {
// //     console.log('qwertyuiop'); //qwertyuiop - було перевизначено onlick() вище в коді
// // };
// //
// // console.log(target);
//
//
// //додавати події до поточного стеку, а не перевизначити
// target.addEventListener('click', function (e) {
//     console.log('asdfghjkl');
//     console.log(e);
// }); //не використовувати стрілочні функції, бо вони втрачають контекст this, вони не будуть зсилатися на target, вони будуть зсилатися на window
//
// //за допомогою таких івентів можна збирати інфу про heatmap на сайті - куди покупці найчастіше клікають на сайті
// target.onmouseover = function () {
//     console.log('over');
// };//коли заводимо мишу в елемент
//
// target.onmouseleave = function () {
//     console.log('leave');
// };//коли виводимо мишу з елементу

// let i1 = document.getElementById('i1');
// i1.oninput = function () {
//     target.innerText = this.value;
//     // console.log(this.value);
// };//все що ми записуємо в input автоматично виводиться в сірому блоці - за допомогою івентів в js можемо впливати на інші елементи

// let f1 = document.forms.f1;
// // f1.username
//
// f1.onsubmit = function (e) {
//     e.preventDefault(); //необхідність щось відправити не перезавантажуючи сторінку
//     // console.log('hello');
//     let user = {name: this.username.value}; //збирати інфу з форми і запаковувати її для відправки на сервер або виводити в іншому вікну/сторінці
//     console.log(user); //ls fetch api
// };

// window.onload = function () {
//     console.log('load'); //спрацює після того як браузерне вікно завантажилося
// };
//
// //сторінка і вікно - це різні речі. у вікні рендериться дкумент (т.е наша сторінка)
// document.onreadystatechange = function () {
//     console.log(document.readyState); //interactive - коли сторінка починає завантажуватись, complete - коли сторінка повністю провантажилася, load - відпрацювання window.onload
// };

//зробити preloader
document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
        document.body.innerText = 'loading start...';
    }

    if (document.readyState === 'complete') {
        document.body.innerText = 'loading complete...';
    }
};