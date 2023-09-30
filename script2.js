fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
        method: 'GET',
    },
).then(response => response.json())
    .then(users => users.forEach(user => {
        var div = document.createElement('div');
        div.setAttribute('id', user.id);
        div.innerHTML = user.name + ' - ' + user.email;
        document.body.appendChild(div);
    }))


