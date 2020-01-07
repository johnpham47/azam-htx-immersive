let database = firebase.database();
let shoppingListsRef = database.ref("shoppinglists");

let shoppingListTextBox = document.getElementById("shoppingListTextBox");
let saveShoppingListButton = document.getElementById("saveShoppingListButton");
let shoppingListUL = document.getElementById("shoppingListUL");

function setupObservers() {
  let shoppingLists = [];

  let snapshotValue = snapshot.val();

  for (let key in snapshotValue) {
    let shoppingList = snapshotValue[key];
    shoppingList.shoppingListId = key;
    shoppingLists.push(shoppingList);
  }
  updateUI(shoppingLists);
}

function deleteShoppingList(key) {
  shoppingListsRef.child(shoppingListId).remove();
}

function updateUI(shoppingLists) {
  shoppingLists.map(shoppingList => {
    return `<li>
    <label type="hidden" value="${key}></label>
    <label>${shoppingList.title}</label>
    <button onclick="deleteShoppingList("${key}")">Remove</button>
    </li>`;
  });

  shoppingListUL.innerHTML = shoppingListItems.join(" ");
}

saveShoppingListButton.addEventListener("click", () => {
  let shoppingListName = shoppingListTextBox.nodeValue;
  shoppingListsRef.push({
    title: shoppingListName
  });
});
