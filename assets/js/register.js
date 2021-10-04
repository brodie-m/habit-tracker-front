/**
 * USER REGISTRATION LOGIC HERE
 */

/**
 * UTILITY FUNCTIONS
 */

// This function validates the email from the registration form to avoid useless requests to the server.
// NOT IN USE
// const validateEmail = (email) => {
//     // Regex pattern for validating the email address
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     // Returns the validation
//     return re.test(String(email).toLowerCase());
// };

// This function displays the errors on the form to warn the user
// const displayError = (errors) => {

// };

// This function validates the username
const validateUsername = (username) => {
    // Removing leading and trailing whitespaces from the username
    // Should be removed on form submission too
    const cleanUsername = username.trim();

    // Only alpha-numeric characters are allowed
    const re = /^[a-zA-Z0-9]+$/;

    const errors = [];

    if (!re.test(String(cleanUsername).toLowerCase()))
        errors.push("Username must be alphanumeric");

    if (cleanUsername.length < 6)
        errors.push("Username must be at least 6 characters");

    return errors;
};

// This function validates the password
const validatePassword = (password, confirmedPassword) => {
    const errors = [];

    if (password != confirmedPassword)
        errors.push("Password does not match");

    if (password.length < 6)
        errors.push("Password must be at least 6 characters");

    return errors;
};


/**
 * USER REGISTRATION
 */

// Getting the register button from the form
const registerButton = document.getElementById("register");

// This function handles the registration process
const registerHandler = (event) => {
    event.preventDefault();

    // Getting the values from the form
    const registerUsername = document.getElementById("register-username").value;
    const registerPassword = document.getElementById("register-password").value;
    const registerConfirmPassword = document.getElementById("register-confirm-password").value;

    // Errors will be added here to give the user useful messages
    const errors = [];

    // Check if the username is valid and add errors if there are any
    errors.push(...validateUsername(registerUsername));

    // Check if the password is valid and add errors if there are any
    errors.push(...validatePassword(registerPassword, registerConfirmPassword));

    // If errors is empty, inputs are valid and can proceed with API call
    // Otherwise, print errors on page
    if (!(errors.length == 0)) {
        displayError(errors)
    }

};

// Adding the event handler to the listener
registerButton.addEventListener("click", registerHandler);