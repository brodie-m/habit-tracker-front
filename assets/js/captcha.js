const captchas = {
    1: "2b4m",
    2: "wy3e",
    3: "4sx8"
}

const getRandomCaptcha = () => {
    const values = Object.keys(captchas);
    console.log(values);
    const randomCaptcha = values[Math.floor(Math.random() * values.length)];
    console.log(randomCaptcha);

    return randomCaptcha;
};

const refreshCaptcha = () => {
    const captcha = getRandomCaptcha();
    document.getElementById("captcha").innerHTML = `
    <img src="./assets/images/captcha/${captcha}.png" alt="captcha">
    <input id="captcha-input" cid="${captcha}" placeholder="Captcha.." />
    `;
}

const verifyCaptcha = (id, captchaInput) => {
    if (captchas[id] == captchaInput)
        return true
    return false;
}

refreshCaptcha();