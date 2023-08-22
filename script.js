// Get the canvas element
var ctx = document.getElementById("chart").getContext("2d");


var chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "******* Price",
            data: [300000, 250000, 280000, 320000, 260000, 240000],
            borderColor: "#f7931a",
            backgroundColor: "transparent",
            pointRadius: 0,
            borderWidth: 2
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                },
                ticks:{
                    fontColor:"white"
                }
            }],
            yAxes:[{
                gridLines:{
                    display:false
                },
                ticks:{
                    fontColor:"white"
                }
            }]
        }
    }
});
