//function expression
// greeting(); //error
let greeting = function () {
    console.log('hi!')
};

greeting();

//function declaration
// asd(); //will be working, hoisting
function asd() {
    console.log('qwerty')
}

asd();
