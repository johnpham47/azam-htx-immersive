// let postsUL = document.getElementById("postsUL");
// const url = "https://jsonplaceholder.typicode.com/posts";

// let request = new XMLHttpRequest();
// request.addEventListener("load", function() {
//   //   console.log(this.responseText);
//   let posts = JSON.parse(this.responseText);
//   let postItems = posts.map(post => {
//     return `<li>${post.title}<li>`;
//   });
//   postsUL.innerHTML = postItems.join(" ");
// });

// request.open("GET", url);
// request.send();
let postImg = document.getElementById("photos");
const url = "https://jsonplaceholder.typicode.com/photos";

let request = new XMLHttpRequest();
request.onload = function() {
  console.log(this.responseText);
  let posts = JSON.parse(this.responseText);
  let postPhotos = posts.map(post => {
    return `<li>
             <label>${post.title}<label>
              <img src="${post.thumbnailUrl}">
              <button onclick="clickMe()">Click Me!</button>
            </li>`;
  });
  postImg.innerHTML = postPhotos.join(" ");
};

request.open("GET", url);
request.send();

function clickMe() {
  // console.log("Button Clicked");
  let postButton = document.getElementById("button");
  let buttonURL = "https://jsonplaceholder.typicode.com/comments";
  let buttonRequest = new XMLHttpRequest();
  buttonRequest.onload = function() {
    // console.log(this.responseText);
    let comments = JSON.parse(this.responseText);
    let postComments = comments.map(comment => {
      return `<div>
              ${comment.id}
              </div>`;
    });
    postButton.innerHTML = postComments.join(" ");
  };
  buttonRequest.open("GET", buttonURL);
  buttonRequest.send();
}
