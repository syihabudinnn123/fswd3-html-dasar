const baseur1 = "https://crudcrud.com/api/9417459b098c4f63bf73debb5fbf9f59";
const todoList = document.getElementById("todos");

document.querySelector("form").addEventListener("submit", save);

async function save(e){
    e.preventDefault();
    const form = e.target;
    const title = form.querySelector("[name = title]");
    const response = await fetch(baseur1 + "/todos",{
        method: "post",
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify({"title": title.value}),
    });
    alert("SAVED")
    title.value = "";
}

async function list(){
    const response = await fetch(baseur1 + '/todos', {
        method: 'get',
        headers: {
            'content-type': 'application/json',
        },
    });
    const todos = await response.json();
    todoItems = todos;
    while (todoList.firstChild){
        todoList.removeChild(todoList.firstChild);
    }
    for (var i = 0; i < todoItems.length; i++){
        const li = document.createElement("LI");
        li.innerText = todoItems[i].title;
        todoList.appendChild(li);
       
    }
}