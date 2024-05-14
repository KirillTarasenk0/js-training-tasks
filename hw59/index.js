const getTodosBtn = document.getElementById('getTodos');
const printTodosBtn = document.getElementById('printTodos');
const listContainer = document.getElementById('listContainer');
const form = document.getElementById('form');

let data = [];

function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            return json.map(item => {
                return {
                    id: item.id,
                    title: item.title
                };
            });
        });
}

function printTodos(array) {
    const ul = document.createElement('ul');
    listContainer.innerHTML = '';
    listContainer.appendChild(ul);
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `${array[i].id} - ${array[i].title}`;
        ul.appendChild(li);
    }
}

getTodosBtn.addEventListener('click', () => {
    getTodos().then(result => {
        data.push(...result);
    });
});

printTodosBtn.addEventListener('click', async() => {
    printTodos(data);
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let formDataObject = new FormData();
    formDataObject.append('userId', document.getElementById('userNumber').value);
    formDataObject.append('title', document.getElementById('title').value);
    formDataObject.append('completed', document.getElementById('completed').value);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data; charset=UTF-8',
            },
            body: formDataObject,
        });
        if (response.status === 201) {
            const newTodo = await response.json();
            data.push({
                id: newTodo.id,
                title: formDataObject.get('title'),
            });
            printTodos(data);
        }
    } catch(error) {
        console.error(error);
    }
});