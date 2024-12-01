let url = new URL('https://jsonplaceholder.typicode.com/posts');
url.searchParams.set('userId', 8);
url.searchParams.set('asd', 'qwertyuio');

// console.log(url.searchParams.get('asd'));
// console.log(url.searchParams.has('asd'));//true
// url.searchParams.delete('asd');
// url.searchParams.forEach();


fetch(url)
    .then(value => value.json())
    .then(value => {
        console.log(value)
    });