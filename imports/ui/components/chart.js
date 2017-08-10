import { Mongo } from 'meteor/mongo';
import Chart from 'chart.js';
import '../../api/helperFunctions.js';

let ctx = null;

Template['chart'].onRendered(function(){
  ctx = document.getElementById('myChart').getContext('2d');
});

Template['chart'].helpers({
});

Template['chart'].events({
  'click .show-chart'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Loan 1",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
                fill: false
            }]
        },
        // Configuration options go here
        options: {}
    });
  }
});
