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
    12: "5uwv"
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