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
    // const element = document.createElement("p");
    // element.textContent = error;
    // element.style.color = "red";
    // element.style.textAlign = "center";
    showNotification(error);
  }
  // Appending the error
  //   errorsElement.appendChild(element);
  // }

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
    headers: {
      "Content-Type": "application/json"
    },
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
  showNotification('Successfully logged in');
  setTimeout(() => {
    window.location.href = "./dashboard.html";
  }, 1000)

};

// Adding the event handler to the listener
loginButton.addEventListener("click", loginHandler);

function showNotification(message) {
  return Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}