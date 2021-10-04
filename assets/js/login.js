/**
 * USER LOGIN LOGIC HERE
 */

// Getting the login button from the form
const loginButton = document.getElementById("login");

const loginHandler = (event) => {
    event.preventDefault();

    console.log(loginButton);
};

// Adding the event handler to the listener
loginButton.addEventListener("click", loginHandler);