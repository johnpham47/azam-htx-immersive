// const url = "https://jsonplaceholder.typicode.com/users";
// const postUrl = "https://jsonplaceholder.typicode.com/posts";

// const usersUL = document.querySelector("#usersUL");
// const savePostButton = document.querySelector("#savePostButton");

// savePostButton.addEventListener("click", () => {
//   let request = new XMLHttpRequest();
//   request.open("POST", postURL);
//   request.setRequestHeader("Content-Type", "application/json");

//   let body = {
//     title: "Thomas the Tank Engine",
//     body: "Choo choo muthafuckas",
//     userId: 9001
//   };

//   // const bodyAsString = JSON.stringify(body)
//   request.send(JSON.stringify(body));
// });

const url = "https://jsonplaceholder.typicode.com/users";
const postURL = "https://hungry-diagram.glitch.me/movies";
const usersUL = document.querySelector("#usersUL");
const savePostButton = document.querySelector("#savePostButton");
savePostButton.addEventListener("click", () => {
  // perform a post request
  let request = new XMLHttpRequest();
  request.open("POST", postURL);
  request.setRequestHeader("Content-Type", "application/json");
  let body = { title: "The Room", rating: 9001 };
  //const bodyAsString = JSON.stringify(body)
  //console.log(bodyAsString)
  request.send(JSON.stringify(body));
});
