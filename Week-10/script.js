const groceryInput = document.getElementById('grocery-input');
const addGroceryItemBtn = document.getElementById('add-grocery-item');
const groceryList = document.getElementById('grocery-list');

isInputValid = false;

addGroceryItemBtn.addEventListener('click', () => {
    addGroceryItem();
})

function addGroceryItem() {
    const userGroceryInput = groceryInput.value;
    const groceryItem = document.createElement('li');
    groceryItem.textContent = userGroceryInput;

    validateUserInput(userGroceryInput);
    if (isInputValid) {
        addItemToList(groceryItem);
        groceryInput.value = '';
    }
}

function addItemToList(groceryItem) {
    groceryList.appendChild(groceryItem);
}

function validateUserInput(userInput) {
    if (userInput === '') {
        alert("Please enter an item in the input field!");
        isInputValid = false;
    } else {
        isInputValid = true;
    }
}