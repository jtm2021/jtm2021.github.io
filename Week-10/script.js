const groceryInput = document.getElementById('grocery-input');
const addGroceryItemBtn = document.getElementById('add-grocery-item');
const groceryList = document.getElementById('grocery-list');

addGroceryItemBtn.addEventListener('click', () => {
    addGroceryItem();
})

function addGroceryItem() {
    const userGroceryInput = groceryInput.value;
    const groceryItem = document.createElement('li');
    groceryItem.textContent = userGroceryInput;

    groceryList.appendChild(groceryItem);
}