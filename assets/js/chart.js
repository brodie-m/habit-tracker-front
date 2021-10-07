/**
 * This function updates the chart with the given values
 * Values will be an array of true and falses
 * Frequency
 */

// This functions takes the array of true and falses and gives values for a chart in the following format:
// [true, false, true, false] will become [0, 1, 1, 2, 2]
// The first 0 is the inital value, every true increases the previous one or it stays the same
// const formatData = (data) => {
//     const data = [0];

//     values.forEach((value) => {
//         if (value)
//             data.push(data[data.length - 1] + 1)
//         else {
//             data.push(data[data.length - 1])
//         }
//     })

//     return data;
// }

async function getHabits() {
    console.log("Starting to get all the habits");
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
    const result = await fetch("https://fp-habitab.herokuapp.com/api/habits/show-noupdate", options);
    const data = await result.json()
    console.log("The data at first rendering is", data);
    return data;
}

// This functions gets the data for a single habit, can be used to draw the line chart
async function getSingleHabit(id) {
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
    const result = await fetch(`https://fp-habitab.herokuapp.com/api/habits/show/${id}`, options);
    const data = await result.json()
    return data;
}

// Empties the canvas before rendering a chart again
const resetCanvas = () => {
    // Grabs the chart from the DOM
    const chartDiv = document.querySelector(".chart");
    // Sets a new canvas
    chartDiv.innerHTML = `<canvas id="myChart"></canvas>`
};

//check if we are on all habits view or single habit view
const updateChart = async () => {
    //check if single or all

    // Grabbing the all tasks div to check if it is selected
    const allTasksCircle = document.querySelector(".display-all .circle");
    const allTasksCircleSelected = allTasksCircle.classList.contains("selected");

    resetCanvas();
    console.log("Canvas resetted");

    // Grabbing the chart from the DOM and resetting it

    const ctx = document.getElementById("myChart").getContext("2d");

    // If it is no selected, then will get a single data from all the habits using the id and draw the line graph
    if (!allTasksCircleSelected) {
        //if single, call getSingleHabit(id)
        const selectedTask = document.querySelectorAll("#task-holder .selected");
        const taskId = selectedTask[0].attributes["habit-id"].nodeValue;

        const taskData = await getSingleHabit(taskId);
        const singleHabit = taskData.singleHabit[0];

        //getting frequency
        let freqValue;
        for (const [key, value] of Object.entries(singleHabit.frequency)) {
            if (value === true) {
                freqValue = key
            }
        }
        console.log(freqValue)
        let lineColour
        if (freqValue == 'daily') {
            lineColour = 'rgba(255,100,0,1)'
        }
        if (freqValue == 'weekly') {
            lineColour = 'rgba(50,255,0,1)'
        }
        if (freqValue == 'monthly') {
            lineColour = 'rgba(255,10,255,1)'
        }
        // Emptying
        const labels = singleHabit.completion.dailyValues.map((x, index) => {
            return index
        })
        console.log(labels)
        const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: `Tracking habit: ${singleHabit.name}`,
                        // label: '# of Votes',
                        // data: [12, 19, 3, 5, 2, 3],
                        // data: [100*singleHabit.completion.currentVal/singleHabit.completion.targetVal],
                        data: singleHabit.completion.dailyValues.map(x => 100 * x),
                        fill: false,
                        borderColor: lineColour,
                        tension: 0.01
                    }]
                },
                options: {
                    scales: {
                        x: {
                            min: 0,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Day'
                            },
                            gridLines: {
                                display: false
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Percentage of task completed'
                            },
                            gridLines: {
                                display: false
                            }
                        },
                    }
                }
            }

        )
        return;

    }




    console.log("Rendering all habits chart");
    const token =
        localStorage.getItem("token") || localStorage.getItem("registerToken");
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };
    const result = await fetch("https://fp-habitab.herokuapp.com/api/habits/show-noupdate", options);
    const data = result.json()


        .then(habitsData => {
            console.log(habitsData);
            const habitLabels = []
            const habitDataset = []
            const habitColours=[]
            for (const habit of habitsData) {
                habitLabels.push(habit.name)
                habitDataset.push(100 * habit.completion.currentVal / habit.completion.targetVal)
                //colours
                let freqValue;
                for (const [key, value] of Object.entries(habit.frequency)) {
                    if (value === true) {
                        freqValue = key
                    }
                }
                
                if (freqValue == 'daily') {
                    habitColours.push('rgba(255,100,0,0.5)') 
                }
                if (freqValue == 'weekly') {
                    habitColours.push('rgba(50,255,0,0.5)')
                }
                if (freqValue == 'monthly') {
                    habitColours.push('rgba(255,10,255,0.5)')
                }

            }
            console.log('skipped')
            const chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: habitLabels,
                    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: "percent of task completed",
                        // label: '# of Votes',
                        // data: [12, 19, 3, 5, 2, 3],
                        data: habitDataset,
                        backgroundColor: habitColours,
                        borderColor: habitColours,
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    scales: {
                        x: {
                            min: 0,
                            max: 100
                        }
                    }
                }
            });
        });




    // const data = formatValues(values);

    // Creating a new chart


}

updateChart()