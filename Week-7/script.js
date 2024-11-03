const cardContainer = document.querySelector('.form-container');
const messageContainer = document.querySelector('.message');
const finalMessageOne = document.querySelector('.final-message-one');
const finalMessageTwo = document.querySelector('.final-message-two');
const finalUserName = document.querySelector('.final-user-name');
const finalUserEmail = document.querySelector('.final-user-email');
const form = document.querySelector('form');
const span = document.querySelector('span');

form.onsubmit = (e) => {
    e.preventDefault();
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    console.log(userName + " " + userEmail);
    cardContainer.style.display = "none";
    messageContainer.style.display = "block";
    finalUserName.textContent = userName;
    finalUserEmail.textContent = userEmail;
    finalMessageOne.textContent = ", thank you for your details. We will be in touch via ";
    finalMessageTwo.textContent = " shortly.";
}
