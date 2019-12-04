async function getAllTodos() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let todos = await response.json();
  console.log(todos);
}

getAllTodos();
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response => response.json())
//   .then(function(todos) {
//     let completedItems = todos.filter(toDos => {
//       return toDos.completed === true;
//     });
//     console.log(completedItems);
//   });

// // fetch library to perform network requests
// // fetch is Promise-based library
// // By default it is GET request

// // One line can be typed out straight
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(json => console.log(json));

// // Multi line break into lines
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     // console.log("hi");
//     return response.json;
//   })
//   .then(json => console.log(json));

//*** */ let promise = new Promise(function(resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.open("GET", url)

//     request.onload = function() {
//         let posts = JSON.parse(this.responseText)
//         resolve(posts)
//     }
// })

// ***let promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve("Burger is ready");
//   }, 3000);
// });

// promise
//   .then(result => {
//     console.log(result);
//     return result;
//   })
//   .then(result => {
//     result += "add Fries";
//     return result;
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log("Error");
//   });
