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
const displayError = (errors) => {
  // Getting the errors element to append the errors
  const errorsElement = document.querySelector(".register-errors");

  // Clearing previous errors
  errorsElement.textContent = "";

  for (const error of errors) {
    const element = document.createElement("p");
    element.textContent = error;
    element.style.color = "red";
    element.style.textAlign = "center";

    // Appending the error
    errorsElement.appendChild(element);
  }
};

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

  if (password != confirmedPassword) errors.push("Password does not match");

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
const registerHandler = async (event) => {
  event.preventDefault();

  // Getting the values from the form
  const registerUsername = document.getElementById("register-username").value;
  const registerPassword = document.getElementById("register-password").value;
  const registerConfirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;
  const registerEmail = document.getElementById("register-email").value;
  // Errors will be added here to give the user useful messages
  const errors = [];

  // Check if the username is valid and add errors if there are any
  errors.push(...validateUsername(registerUsername));

  // Check if the password is valid and add errors if there are any
  errors.push(...validatePassword(registerPassword, registerConfirmPassword));

  // If errors is empty, inputs are valid and can proceed with API call
  // Otherwise, print errors on page
  if (!(errors.length == 0)) {
    displayError(errors);
    return;
  }
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: registerUsername,
      email: registerEmail,
      password: registerPassword,
    }),
  };
  const result = await fetch(
    "http://localhost:3000/api/user/register",
    options
  );
  console.log(result);
  if (result.status !== 201 || result.status === 400) {
    const errorResult = await result.json();
    displayError([errorResult.error]);
    console.log(errorResult.error);
    return;
  }

  console.log("success");
  const data = await result.json();
  console.log(data);
  localStorage.setItem("registerToken", data.token);
  //window.location.href = "./dashboard.html";

  // API call here
};

// Adding the event handler to the listener
registerButton.addEventListener("click", registerHandler);
