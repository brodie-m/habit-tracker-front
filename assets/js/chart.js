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
    const result = await fetch("http://localhost:3000/api/habits/show-noupdate", options);
    const data = await result.json()
    return data;
}


//check if we are on all habits view or single habit view
const updateChart =async (values, frequencies) => {
    //check if single or all
    //if single, call getSingleHabit(id)
    const habitsData = await getHabits()
    const habitLabels = []
    const habitDataset = []
    for (habit of habitsData) {
        habitLabels.push(habit.name)
        habitDataset.push(100*habit.completion.currentVal/habit.completion.targetVal)
    }
    // Grabbing the chart from the DOM
    const ctx = document.getElementById("myChart").getContext("2d");

    // const data = formatValues(values);

    // Creating a new chart
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
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis:'y',
            scales: {
                y: {
                    min: 0,
                    max: 100
                }
            }
        }
    });

}

updateChart([true, true, false]);