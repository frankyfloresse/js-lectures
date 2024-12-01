let form = document.forms[0];

form.onsubmit = function (e) {
    e.preventDefault();

    let userId = this.userId.value;
    let title = this.title.value;
    let body = this.body.value;
    // console.log(userId.match(/\d/g));
    // console.log(userId.match(/[0-9]/g));

    if (!!userId.match(/[0-9]/g) && !!body.match(/(\w+\s){3,}/g)) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: +userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    // body.match(/\w/g);
    // body.match(/\w+/g);
    // body.match(/\w{1,}/g);
    // body.match(/\w{1,5}/g);

    // console.log(!!body.match(/(\w+\s){3,}/g));


    // console.log(userId, title, body);
}