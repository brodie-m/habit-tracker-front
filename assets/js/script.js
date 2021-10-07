window.addEventListener("load", async () => {
  const token = localStorage.getItem("token");
  const registerToken = localStorage.getItem("registerToken");
  const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "auth-token": token || registerToken,
      },
  };
  const result = await fetch("https://fp-habitab.herokuapp.com/api/user/verify", options);
  const message = await result.json();
  if (message.message === "good token") {
      window.location.href = "./dashboard.html";
  }
});


// Grabbing the login and registration button from the landing page
const landingLoginButton = document.getElementById("login-button");
const landingRegisterButton = document.getElementById("register-button");

// This functions shows the login modal
const showLoginModal = () => {
  // Get the modal
  const loginModal = document.getElementById("login-modal");

  loginModal.style.display = "block";
};

// This function shows the register modal
const showRegisterModal = () => {
  // Getting the modal
  const registerModal = document.getElementById("register-modal");

  registerModal.style.display = "block";
};

const loginInstead = document.getElementById('register-to-login');
loginInstead.addEventListener('click',()=> {
  closeModal();
  showLoginModal();
})

// Adding the even listeners to show the modals
landingLoginButton.addEventListener("click", showLoginModal);
landingRegisterButton.addEventListener("click", showRegisterModal);
// const optionsButton = document.querySelector(".options");

// optionsButton.addEventListener("click", showEditFormModal);

// Closing the modals
// Getting the close buttons
const closeButtons = document.getElementsByClassName("close");

// This functions closes all the modals, in this case there is no need to distinguish which one
const closeModal = () => {
  // Get the modals
  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");

  loginModal.style.display = "none";
  registerModal.style.display = "none";
};

// Adding the event listener to close the modals
for (const button of closeButtons) {
  button.addEventListener("click", closeModal);
}

/**
 * PARTICLES JS
 */

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "./assets/json/futureproof.json", function () {
  console.log("callback - particles.js config loaded");
});
