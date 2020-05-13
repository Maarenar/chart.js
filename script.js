/**
 * Affiche le nombre dde nouveaux utilisateurs par jour
 */
let labels1 = ['1','2','3','4','5','6','7','8','9','10'];
let data1 = [199.6, 130.3, 126.3, 130, 178, 235, 300, 0, 98, 159];

let myChart = document.getElementById('myChart').getContext('2d');

 /**
 * Line chart
 */
 let chart1 = new Chart(myChart, {
    type: 'line',
    data: {
        labels: labels1,
        datasets:[{
            label: 'Nouveaux utilisateurs',
            fill : false,
            lineTension : 0.1,
            borderColor: '#2D5368',
            pointBorderColor: '#F58250',
            pointBackgroundColor: '#2D5368',
            pointBorderWidth: 1,
            pointHoverRadius: 5,  
            pointHoverBackgroundColor: '#F58250',
            pointHoverBorderColor: '#2D5368',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data1,
        }]
    },
    options: {
        title: {
            display: false
        },
        legend: {
            display: false
        }
    }
 });

 /**
 * Bar chart
 * 
 */

let labels2 = ['1','2','3','4','5','6','7','8','9','10'];
let data2 = [199.6, 130.3, 126.3, 130, 178, 235, 300, 0, 98, 159];
const myChart2 = document.getElementById('chart2').getContext('2d');

let chart2 = new Chart(myChart2,{
    type: 'bar',
    data: {
        labels: labels2,
        datasets:[{
            label: 'Nouveaux utilisateurs',
            fill : false,
            lineTension : 0.1,
            backgroundColor: "#2D5368",
            borderColor: "#F58250",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,  
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data2,
        }]
    },
    options: {
        title: {
            display: false
        },
        legend: {
            display: false
        }
    }
});


/**
 * Affiche le nombre de connections par jour
 */

let labels3 = ['1','2','3','4','5','6','7','8','9','10'];
let data3 = [17,39,45,85,1,15,73,30,94,10];
const myChart3 = document.getElementById('chart3').getContext('2d');

 /**
 * Line chart
 */
 let chart3 = new Chart(myChart3, {
    type: 'line',
    data: {
        labels: labels3,
        datasets:[{
            label: 'Nouveaux utilisateurs',
            fill : false,
            lineTension : 0.1,
            borderColor: '#2D5368',
            pointBorderColor: '#F58250',
            pointBackgroundColor: '#2D5368',
            pointBorderWidth: 1,
            pointHoverRadius: 5,  
            pointHoverBackgroundColor: '#F58250',
            pointHoverBorderColor: '#2D5368',
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data3,
        }]
    },
    options: {
        title: {
            display: false
        },
        legend: {
            display: false
        }
    }
 });

 /**
 * Bar chart
 * 
 */

let labels4 = ['1','2','3','4','5','6','7','8','9','10'];
let data4 = [17,39,45,85,1,15,73,30,94,10];
const myChart4 = document.getElementById('chart4').getContext('2d');

let chart4 = new Chart(myChart4,{
    type: 'bar',
    data: {
        labels: labels4,
        datasets:[{
            label: 'Nouveaux utilisateurs',
            fill : false,
            lineTension : 0.1,
            backgroundColor: "#2D5368",
            borderColor: "#F58250",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,  
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data4,
        }]
    },
    options: {
        title: {
            display: false
        },
        legend: {
            display: false
        }
    }
});
