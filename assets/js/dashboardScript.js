//check for valid token in local storage
//either from login or registration
//if its not there (i.e, not "good token"), redirect to index.html
window.addEventListener('load', async () => {
    const token = localStorage.getItem('token')
    const registerToken = localStorage.getItem('registerToken')
    const options = {
        "method": "POST",
        "headers": {
            'Content-Type': 'application/json',
            "auth-token": token || registerToken
        }
    }
    const result = await fetch('http://localhost:3000/api/user/verify', options)
    const message = await result.json();
    if (message.message !== "good token") {
        window.location.href = "./index.html"
    }
})
//load habit data 
async function getHabits() {
    //route is protected, need to send token as header
    const token = localStorage.getItem('token') || localStorage.getItem('registerToken');
    const options = {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
            "auth-token": token
        }
    }
    const result = await fetch('http://localhost:3000/api/habits/show', options)
    const data = await result.json();
    console.log(data)
    drawHabits(data)
}
getHabits()

function drawHabits(data) {
    //data is passed as an array of objects, so need to draw
    //a new section for each element of the array
    data.forEach((habit) => {
        console.log(habit)
        //get the task holder to append new tasks to 
        const taskHolder = document.getElementById('task-holder')

        //create top level task div
        const newTask = document.createElement('div')
        newTask.classList.add('task')

        //create circle div
        const newCircle = document.createElement('div')
        newCircle.classList.add('circle')

        //create task name div
        const newTaskName = document.createElement('div')
        newTaskName.classList.add('task-name')

        //create streak div
        const newStreak = document.createElement('div')
        newStreak.classList.add('streak')

        //create streak number div
        const newStreakNumber = document.createElement('div')
        newStreakNumber.classList.add('streak-number')

        //create options div
        const newOptions = document.createElement('div')
        newOptions.classList.add('options', 'noselect')

        //fill each element with proper content
        newTaskName.textContent = habit.name
        newOptions.textContent = "•••"

        //append 
        taskHolder.appendChild(newTask)
        newTask.appendChild(newCircle)
        newTask.appendChild(newTaskName)
        
        newTask.appendChild(newStreak)
        newTask.appendChild(newOptions)
        newStreak.appendChild(newStreakNumber)

    })


}