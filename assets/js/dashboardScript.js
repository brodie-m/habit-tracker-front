//check for valid token in local storage
//either from login or registration


//if its not there (i.e, not "good token"), redirect to index.html
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
    const result = await fetch("http://localhost:3000/api/user/verify", options);
    const message = await result.json();
    if (message.message !== "good token") {
        window.location.href = "./index.html";
    }
});
//load habit data
async function getHabits() {
    //route is protected, need to send token as header
    const token =
        localStorage.getItem("token") || localStorage.getItem("registerToken");
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };
    const result = await fetch("http://localhost:3000/api/habits/show", options);
    const data = await result.json();

    drawHabits(data);
}

async function getHabitById(id) {
    const token = localStorage.getItem('token') || localStorage.getItem('registerToken')
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };
    const result = await fetch(`http://localhost:3000/api/habits/show/${id}`, options);
    return await result.json()

}

getHabits();

function drawHabits(data) {
    //data is passed as an array of objects, so need to draw
    //a new section for each element of the array
    data.forEach((habit) => {
        const habitId = habit._id
        //get the task holder to append new tasks to
        const taskHolder = document.getElementById("task-holder");

        //create top level task div
        const newTask = document.createElement("div");
        newTask.classList.add("task");

        //create circle div
        const newCircle = document.createElement("div");
        newCircle.classList.add("circle");
        newCircle.setAttribute('habit-id', `${habitId}`)

        //create task name div
        const newTaskName = document.createElement("div");
        newTaskName.classList.add("task-name");

        //create streak div
        const newStreak = document.createElement("div");
        newStreak.classList.add("streak");

        //create streak number div
        const newStreakNumber = document.createElement('div')
        newStreakNumber.classList.add('streak-number')

        newStreakNumber.textContent = getStreak(0, habit.completion.daysComplete)

        // //create fire div
        // const fireThing = document.getElementsByClassName('fire-svg')
        // const fireArray = new Array(...fireThing)
        // console.log(fireArray)
        // const newFire = document.cloneNode(fireArray[0])



        //create options div
        const newOptions = document.createElement("div");
        newOptions.classList.add("options", "noselect");



        //fill each element with proper content
        newTaskName.textContent = habit.name
        newOptions.textContent = "•••"



        //append 
        taskHolder.appendChild(newTask)
        newTask.appendChild(newCircle)
        newTask.appendChild(newTaskName)

        newTask.appendChild(newStreak)
        // newTask.appendChild(newFire)
        newTask.appendChild(newOptions)
        newStreak.appendChild(newStreakNumber)


        newTask.appendChild(newStreak);
        newTask.appendChild(newOptions);
        newStreak.appendChild(newStreakNumber);
    });

    const circles = document.getElementsByClassName("circle");
    console.log(circles)
    for (const circle of circles) {
        circle.addEventListener("click", circleHandler);
    }
}

async function letsgo() {
    beav.src = "./assets/images/mascot-blink-half.png";
    await setTimeout(() => {
        beav.src = "./assets/images/mascot-blink.png";
    }, 100);
    await setTimeout(() => {
        beav.src = "./assets/images/mascot-blink-half.png";
    }, 200);
    await setTimeout(() => {
        beav.src = "./assets/images/mascot.png";
    }, 200);
}
let blink = setInterval(() => {
    letsgo();
}, 5000);

function buildGraph() {
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
        .attr(
            "d",
            d3
            .line()
            .x((d) => xScale(d[0]))
            .y((d) => yScale(d[1]))
        )
        .attr("transform", "translate(100, 50)")
        .attr("stroke", "black")
        .attr("fill", "none")
        .attr("stroke-width", "2px");
}

beav.addEventListener("mouseover", () => {
    beav.src = "./assets/images/mascot-eyes-closed-happy.png";
    clearInterval(blink)
});

beav.addEventListener("mouseout", () => {
    beav.src = "./assets/images/mascot.png";
    blink = setInterval(() => {
        letsgo();
    }, 5000);
});




// This functions shows the create modal
const showCreateHabitModal = () => {
    // Get the modal
    const createHabitModal = document.getElementById("create-habit-modal");

    createHabitModal.style.display = "block";
};

const addTaskButton = document.getElementById('add-task')
addTaskButton.addEventListener('click', showCreateHabitModal)

const closeModal = () => {
    // Get the modals
    const createHabitModal = document.getElementById("create-habit-modal");


    createHabitModal.style.display = "none";

};


// This functions closes all the modals, in this case there is no need to distinguish which one

const submitNewHabit = document.getElementById('submit-new-habit')
submitNewHabit.addEventListener('click', submitHabitHandler)

async function submitHabitHandler(event) {
    event.preventDefault();
    let dailyBool = false;
    let weeklyBool = false;
    let monthlyBool = false;
    const radios = document.getElementsByName('flexRadioDefault')
    const value = getValues(radios)

    function getValues(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].checked)
                return (arr[i].value)
        }
    }
    if (value === "daily") {
        dailyBool = true
    };
    if (value === "weekly") {
        weeklyBool = true
    };
    if (value === "monthly") {
        monthlyBool = true
    };

    const habitTarget = document.getElementById('habit-target').value;
    const habitName = document.getElementById('habit-name').value;
    const options = {
        'method': 'POST',
        "headers": {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token') || localStorage.getItem('registerToken'),

        },
        body: JSON.stringify({
            name: habitName,
            frequency: {
                daily: dailyBool,
                weekly: weeklyBool,
                monthly: monthlyBool
            },
            completion: {
                currentVal: 0,
                targetVal: habitTarget,

            }
        })
    }

    const result = await fetch('http://localhost:3000/api/habits/add', options)
    window.location.href = "./dashboard.html"
}



function circleHandler(e) {
    e.preventDefault();
    displaySingleHabit(this.getAttribute('habit-id'))
}

async function displaySingleHabit(_id) {
    const singleHabit = await getHabitById(_id)
    const habitObj = singleHabit.singleHabit[0]

    const holder = document.getElementById('habit-info-holder')
    const currentStreak = document.getElementById('current-streak-number')
    currentStreak.textContent = getStreak(0,habitObj.completion.daysComplete)

    const daysCompleteNumber = document.getElementById('days-completed-number')
    const daysComplete = habitObj.completion.daysComplete.filter(x=> x===1).length;
    daysCompleteNumber.textContent = daysComplete

    const bestStreakNumber = document.getElementById('best-streak-number')
    const bestStreak = habitObj.completion.daysComplete.join('').split('0')
    let max = 0
    for (streak of bestStreak) {
        if (streak.length > max) {
            max = streak.length
        }
    }
    bestStreakNumber.textContent = max

    const daysTrackedNumber = document.getElementById('days-tracked-number')
    daysTrackedNumber.textContent = habitObj.completion.daysComplete.length;


}

function getStreak(i, arr) {
    let streak = 0;
    calcluateStreak(i)

    function calcluateStreak(i) {
        if (arr.length - 1 - i < 0) return streak
        let last = arr[arr.length - 1 - i]
        if (last !== 1) return streak
        streak += 1
        calcluateStreak(i + 1)
    }
    return streak

}