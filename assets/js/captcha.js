const captchas = {
    1: "2b4m",
    2: "wy3e",
    3: "4sx8",
    4: "hsl7",
    5: "5fwv",
    6: "zd3s",
    7: "h1y2",
    8: "3fzz",
    9: "ts4a",
    10: "11x1",
    11: "yffc",
    12: "5uwv",
    13: "academy2268",
    14: "experimentalgoat",
    15: "veterancontribution"
}

// This picks a random captcha from the available captchas
// Avoids using the same every time
const getRandomCaptcha = () => {
    const values = Object.keys(captchas);

    const randomCaptcha = values[Math.floor(Math.random() * values.length)];

    return randomCaptcha;
};

// Gets a new captcha and updates the DOM accordingly
const refreshCaptcha = () => {
    const captcha = getRandomCaptcha();
    document.getElementById("captcha").innerHTML = `
    <img src="./assets/images/captcha/${captcha}.jpg" alt="captcha">
    <p id="refresh-captcha">Refresh the captcha</p>
    <input id="captcha-input" cid="${captcha}" placeholder="Captcha.." />
    `;

    // Adding the event listeners to the refresh captcha
    const refreshCaptchaElement = document.getElementById("refresh-captcha");
    refreshCaptchaElement.addEventListener("click", () => refreshCaptcha());
}

// This verifies if the user has entered the correct captcha
const verifyCaptcha = (id, captchaInput) => {
    if (captchas[id] == captchaInput)
        return true
    return false;
}

// Initial capta is added to the DOM
refreshCaptcha();
