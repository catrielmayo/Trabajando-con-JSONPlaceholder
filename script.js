async function getUsers() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users',
            {
                method: 'GET',
            },
        );

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}


getUsers().then(data => {
    data.forEach(user => {
        var div = document.createElement('div');
        div.setAttribute('id', user.id);
        div.innerHTML = user.name + ' - '+ user.email;
        document.body.appendChild(div);
    });

});