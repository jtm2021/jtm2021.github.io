const cardContainer = document.querySelector('.card-container');

function submitForm() {
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    console.log(userName + " " + userEmail);
    cardContainer.style.display = "none";
}

