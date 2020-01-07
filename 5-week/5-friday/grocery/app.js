let database = firebase.database();

let shoppingListsRef = database.ref();

const shoppingListTextBox = document.getElementById("shoppingListTextBox");
const saveShoppingListButton = document.getElementById(
  "saveShoppingListButton"
);
const shoppingListUL = document.getElementById("shoppingListUL");

function setupObservers(snapshot) {
  let shoppingLists = [];
  let snapshotValue = snapshot.val();

  for (let key in snapshotValue) {
    let shoppingList = snapshotValue[key];
    shoppingList.shoppingListId = key;
    shoppingLists.push(shoppingList);
  }
  updateUI(shippingLists);
}

function updateUI(shoppingLists) {
  let shoppingListItems = shoppingLists.map(shoppingList => {
    return `<li>
      <label type="hidden" value="shoppingList.shoppingListId"></label>
      <label>${shoppingList.title}</label>
      </li>`;
  });
  shoppingListUL.innerHTML = shoppingListItems.join("");
  console.log(shoppingListItems);
}

function saveShoppingListButtonClick() {
  var shoppingListText = shoppingListTextBox.value;
  shoppingListsRef.push({
    title: shoppingListText
  });
  event.preventDefault();
}
