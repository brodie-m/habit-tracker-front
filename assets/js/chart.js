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

const updateChart = (values, frequencies) => {
    // Grabbing the chart from the DOM
    const ctx = document.getElementById("myChart").getContext("2d");

    // const data = formatValues(values);

    // Creating a new chart
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

updateChart([true, true, false]);