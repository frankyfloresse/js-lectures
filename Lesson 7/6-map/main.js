let map = new Map(); // {size: 0}
// console.log(map);

// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');
// console.log(map); //{1 => 'one', 2 => 'two', 3 => 'three'}
//
// console.log(map.get(1));//one

// map.set('doctor', {name: 'roma', surname: 'oganov'});
// map.set('chizh', {name: 'ivan', surname: 'ivanov'});
// console.log(map.get('doctor')); //{name: 'roma', surname: 'oganov'}

// map.set(
//     {id: 'doctor'},
//     {name: 'roma', surname: 'oganov'}
// );
//
// map.set(
//     {id: 'chizh'},
//     {name: 'ivan', surname: 'ivanov'}
// );
//
// console.log(map.get({id: 'doctor'})); //undefined

let doctor = {id: 'doctor'};
let chizh = {id: 'chizh'};
map.set(
    doctor,
    {name: 'roma', surname: 'oganov'}
);

map.set(
    chizh,
    {name: 'ivan', surname: 'ivanov'}
);

console.log(map.get(chizh)); //{name: 'ivan', surname: 'ivanov'}

//NaN всередині map дає true
//ключі в map ззавжди унікальні, якщо є два однакові ключі то останні буде перезаписувати попередній

// map.delete(doctor);
// console.log(map);

// map.clear();

console.log(map.size);

console.log(map.keys());
let fromKeys = Array.from(map.keys());
console.log(fromKeys);

console.log(map.values());
let fromValues = Array.from(map.values());
console.log(fromValues);







