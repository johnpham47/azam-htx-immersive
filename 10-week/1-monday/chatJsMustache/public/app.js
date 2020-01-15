const message = document.getElementById("m");
const submitButton = document.getElementById("submitButton");
const chatForm = document.getElementById("chatForm")
const socket = io();
submitButton.addEventListener("click", event => {
    event.preventDefault()
    socket.emit("chat message", message);
    document.getElementById('messages').insertAdjacentHTML('beforeend', `<li>${message.value}</li>`)
    chatForm.reset();
});