let user = {
    id: 1,
    name: 'vasya'
}

user.age = 31;
console.log(user);

user['status'] = false;
console.log(user);

delete user.id;
console.log(user);