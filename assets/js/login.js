/**
 * USER LOGIN LOGIC HERE
 */

// Getting the login button from the form
const loginButton = document.getElementById("login");

const loginHandler = async (event) => {
    event.preventDefault();
    const email = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    console.log(email)
    const options = {
        'method': 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "email": email,
            "password": password

        })
    }
    
    const result = await fetch('http://localhost:3000/api/user/login', options)
    if (!result.status===200 || result.status===400) {
        const error = await result.json();
        console.log(error.error)
        return
    } 
    const token = await result.json();
    
    localStorage.setItem("token", token.token);
    window.location.href = "../dashboard.html"

};

// Adding the event handler to the listener
loginButton.addEventListener("click", loginHandler);