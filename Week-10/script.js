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

        createRemoveButton(groceryItem);
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

function createRemoveButton(specificItem) {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove This Item';
    removeBtn.classList.add('btn', 'btn-danger', 'remove-item-btn');
    removeBtn.addEventListener('click', () => {
        groceryList.removeChild(specificItem);
    })
    specificItem.appendChild(removeBtn);
}