/**
 * USER LOGIN LOGIC HERE
 */
//
const displayLoginError = (errors) => {
  // Getting the errors element to append the errors
  const errorsElement = document.querySelector(".login-errors");

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

// Getting the login button from the form
const loginButton = document.getElementById("login");

const loginHandler = async (event) => {
  event.preventDefault();
  const email = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  console.log(email);
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const result = await fetch("http://localhost:3000/api/user/login", options);
  console.log("i got here");
  if (!result.status === 200 || result.status === 400) {
    const error = await result.json();
    displayLoginError([error.error]);
    console.log(error.error);
    return;
  }

  let data = await result.json();
  localStorage.setItem("token", data.token);
  console.log(data);

  window.location.href = "./dashboard.html";
};

// Adding the event handler to the listener
loginButton.addEventListener("click", loginHandler);
