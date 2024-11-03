const cardContainer = document.querySelector('.form-container');
const messageContainer = document.querySelector('.message');
const finalMessage = document.querySelector('.final-message');
const form = document.querySelector('form');

form.onsubmit = (e) => {
    e.preventDefault();
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    console.log(userName + " " + userEmail);
    cardContainer.style.display = "none";
    messageContainer.style.display = "block";
    finalMessage.textContent = userName + ", thank you for your details. We will be in touch via " + userEmail + " shortly.";
}

