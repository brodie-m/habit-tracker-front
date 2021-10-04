/**
 * USER REGISTRATION LOGIC HERE
 */

// Getting the register button from the form
const registerButton = document.getElementById("register");

const registerHandler = (event) => {
    event.preventDefault();

    console.log(registerButton);
};

// Adding the event handler to the listener
registerButton.addEventListener("click", registerHandler);

