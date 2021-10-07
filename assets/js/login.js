/**
 * USER LOGIN LOGIC HERE
 */
//
const displayLoginError = (errors) => {
  // Getting the errors element to append the errors
  const errorsElement = document.querySelector(".login-errors");

  // Clearing previous errors
  errorsElement.innerHTML = "";

  // Appending the errors gif
  errorsElement.innerHTML = `
    <center>
      <img src="./assets/images/shiba/errors.gif?a=${Math.random()}"
        style="height: 90px; margin-top: -60px"
        alt="errors image">
    </center>
  `;


  for (const error of errors) {
    const element = document.createElement("p");
    element.textContent = error;
    element.style.color = "red";
    element.style.textAlign = "center";

    // Appending the error
    errorsElement.appendChild(element);
  }

  refreshCaptcha();

};

// Getting the login button from the form
const loginButton = document.getElementById("login");

const loginHandler = async (event) => {

  event.preventDefault();
  const email = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  console.log(email);

  const captchaInput = document.getElementById("captcha-input").value;
  const captchaId = document.getElementById("captcha-input").getAttribute("cid");

  if (!verifyCaptcha(captchaId, captchaInput)) {
    return displayLoginError(["Invalid captcha"]);
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const result = await fetch("https://fp-habitab.herokuapp.com/api/user/login", options);
  console.log("i got here");
  if (!result.status === 200 || result.status === 400) {
    const error = await result.json();
    displayLoginError([error.error]);
    console.log(error.error);
    return;
  }
  console.log(result.headers.get("auth-token"));
  let data = await result.json();
  localStorage.setItem("token", data.token);
  console.log(data);

  window.location.href = "./dashboard.html";
};

// Adding the event handler to the listener
loginButton.addEventListener("click", loginHandler);
