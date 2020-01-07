const postUrl = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/";
const submitOrder = document.querySelector("#submitOrder");
const findOrder = document.querySelector("#findOrder");

submitOrder.addEventListener("click", () => {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let coffee = document.querySelector("#coffee").value;
  let request = new XMLHttpRequest();
  request.open("POST", postUrl);
  request.setRequestHeader("Content-Type", "application/json");
  let body = { emailAddress: email, coffee: coffee };

  request.send(JSON.stringify(body));
});

function getButton() {
  event.preventDefault();
  let searchedOrder = document.getElementById("searchedOrder");
  let customerOrder = document.getElementById("order").value;
  let orderUrl = `http://dc-coffeerun.herokuapp.com/api/coffeeorders/${customerOrder}`;
  let getRequest = new XMLHttpRequest();

  getRequest.onload = function() {
    let orders = JSON.parse(this.response);
    console.log(orders);
    console.log(orders._id);
    searchedOrder.innerHTML = `
      <li>Order: ${orders.coffee}</li>
      `;
  };
  getRequest.open("GET", orderUrl);
  getRequest.send();
}

// function getButton() {
//   let getRequest = new XMLHttpRequest();
//   getRequest.onload = function() {
//     event.preventDefault();
//     let searchedOrder = document.querySelector("#searchedOrder");
//     let customerOrder = document.querySelector("#order").value;
//     let orderJson = JSON.parse(this.responseText);
//     searchedOrder.innerHTML = coffeeOrders.join(" ");
//   };
//   getRequest.open("GET", postUrl);
//   getRequest.send();
// }
