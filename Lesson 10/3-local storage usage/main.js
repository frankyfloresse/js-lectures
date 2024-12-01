let productsDiv = document.getElementsByClassName('products')[0];

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Delicious-Fruit-Juices-Orange-Kiwi-and-Strawberry.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://lornahealth.com/app/uploads/2019/07/tomato-juice-recipe.jpg'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.allrecipes.com/thmb/Jjow_QEim_LekakxVeENF35dTWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-242148-Ginger-Turmeric-Herbal-Tea-2x1-0075ecdaa2684f0cba1885b95c52df72.jpg'
    },
];

for (const product of products) {
    let productBlock = document.createElement('div'); // h2 + img

    let h2 = document.createElement('h2');
    h2.innerText = `${product.title} ${product.price} UAH`;

    let img = document.createElement('img');
    img.src = product.image;

    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'add to cart';

    buttonElement.onclick = function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    productBlock.append(h2, img, buttonElement);
    productsDiv.appendChild(productBlock);
}