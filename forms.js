let todoText = "";
const todoArray = [];
const ul = document.querySelector("ul");

function renderTemplate() {
    let template = todoArray.map(todoItem => `
    <li id="${todoItem.id}" class="${todoItem.complete ? 'crossout': ''}">${todoItem.text} <button id="x">x</button> <button id="complete" class="${todoItem.complete ? 'completeColor': ''}">complete</button></li>
    `);
    ul.innerHTML = template.join("");
}

document.querySelector("#todoForm").addEventListener("submit", function(event) {
    console.log("Submitting the form");
    event.preventDefault();
    
    todoText = document.querySelector("#todo").value;
    const todo = {
        text: `${todoText}`,
        complete: false,
        id: Date.now()
    }
    todoArray.push(todo);
    renderTemplate()
});

ul.addEventListener('click', (event) => {
    index = todoArray.findIndex(obj => obj.id == event.target.parentNode.id);    

    if (event.target.id == "complete") {
        todoArray[index].complete = true;
        event.target.parentNode.classList.toggle('crossout');
        event.target.classList.toggle('completeColor');

    } else if (event.target.id == "x") {
        todoArray.splice(index, 1);
        renderTemplate();
    }
})

