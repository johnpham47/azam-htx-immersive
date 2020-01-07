let addToDoButton = document.getElementById("addToDoButton");
let titleTextBox = document.getElementById("titleTextBox");
let priorityTextBox = document.getElementById("priorityTextBox");
let todoList = document.getElementById("toDoList");

const url = "http://localhost:3000/todo";

function submitForm(e) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: titleTextBox.value,
      priority: priorityTextBox.value,
      dateCreated: Date(),
      dateCompleted: "",
      isComplete: false
    })
  })
    .then(response => response.json())
    .then(todos => {
      let tasks = todos.map(todos => {
        return `<li> Task: ${todos.title}</li>
                <li> Priority: ${todos.priority}</li>
                <li> Date Created: ${todos.dateCreated}</li>
                `;
      });
      todoList.innerHTML = tasks.join("");
      console.log(todoList);
    });
}
