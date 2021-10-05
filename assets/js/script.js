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

// Adding the even listeners to show the modals
landingLoginButton.addEventListener("click", showLoginModal);
landingRegisterButton.addEventListener("click", showRegisterModal);

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
particlesJS.load('particles-js', './assets/json/futureproof.json', function () {
    console.log('callback - particles.js config loaded');
});
function buildGraph(){
let scores = [],
scoresonthedoors = [];
for (let x = 1; x <= 30; x++) {
let score = Math.round(Math.random() * 10) / 10;
scores.push({
  date: [x, 11, 2017],
  score: score,
});
scoresonthedoors.push([x, score]);
}
dateExtent = d3.range(1, scores.length);
scoreExtent = d3.extent([0, 1]);
xScale = d3.scaleBand().domain(dateExtent).range([0, 900]).padding(1); //
yScale = d3.scaleLinear().domain(scoreExtent).range([500, 0]);
x_axis = d3.axisBottom(xScale);
y_axis = d3.axisLeft(yScale);
var svg = d3
.select("body")
.append("svg")
.attr("width", 1000)
.attr("height", 1000)
.attr("id", "svg");
svg
.append("g")
.attr("class", "x axis")
.attr("transform", "translate(100, 550)")
.call(x_axis);
svg
.append("g")
.attr("class", "y axis")
.attr("transform", "translate(100, 50)") //50 = indentation
.call(y_axis);
svg
.append("text")
.attr("text-anchor", "end")
.attr("x", 600)
.attr("y", 600)
.text("Date");
svg
.append("text")
.attr("text-anchor", "end")
.attr("transform", "rotate(-90)")
.attr("x", -200)
.attr("y", 50)
.text("Score");
svg
.append("path")
.attr("class", "line")
.datum(scoresonthedoors)
.attr("d", d3
.line()
.x((d) => xScale(d[0]))
.y((d) => yScale(d[1])))
.attr("transform", "translate(100, 50)")
.attr("stroke", "black")
.attr("fill", "none")
.attr("stroke-width", "2px")}