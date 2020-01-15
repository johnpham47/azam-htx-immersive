const message = document.getElementById("m");
const submitButton = document.getElementById("submitButton");
const chatForm = document.getElementById("chatForm")
const socket = io();

socket.on("chat message", msg => {
    event.preventDefault();
    console.log(msg);
    let messages = document.getElementById("messages");
    messages.insertAdjacentHTML("beforeend", `<li>${msg}</li>`);
});
submitButton.addEventListener("click", event => {
    event.preventDefault()
    socket.emit("chat message", message.value);
    chatForm.reset();
});