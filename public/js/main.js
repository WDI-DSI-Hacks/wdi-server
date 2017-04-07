console.log('Main JS working');

var dataExample;

function processData(data){
const top1 = dataExample.dep.top[0].profit
console.log(top1);
const top2 = dataExample.dep.top[1].dept.profit
console.log(top2);
const top3 = dataExample.dep.top[2].profit
console.log(top3);
const top4 = dataExample.dep.top[3].profit
console.log(top4);
const top5 = dataExample.dep.top[4].profit
console.log(top5);

// /stores/:id
let data2 = {
    // labels: ["Store ID", "Department", "Profit"],
    datasets: [
        {
            label: "Walmart Forecase",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [top1, top2, top3,top4, top5],
            // spanGaps: false,
        }
    ]
};















}

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/api/stores/finddeps',
        type: 'GET',
        success: function(data) {
            dataExample = data;
            console.log(data);
            processData(data);




        },


        error: function(data) {
            console.log(data);
        },



    });

    $(".formit").submit(function(e) {
     e.preventDefault()
     window.location.href = "/stores/" + $('#store').val();
    });
});




// const CHART = document.getElementById('bubblechart');
// console.log(CHART);

// let bubblechart = new Chart(CHART, {
//   type: 'bubble',
//   data: {
//       datasets: [
//     {
//             label: 'First Dataset',
//             data: {
//     datasets: [
//       {
//         label: 'John',
//         data: [
//           {
//             x: 3,
//             y: 7,
//             r: 10
//           }
//         ],
//         backgroundColor:"#ff6384",
//         hoverBackgroundColor: "#ff6384"
//       },
//       {
//         label: 'Paul',
//           data: [
//             {
//               x: 6,
//               y: 2,
//               r: 10
//             }
//           ],
//           backgroundColor:"#ff6384",
//           hoverBackgroundColor: "#ff6384"
//       },
//       {
//         label: 'George',
//           data: [
//             {
//               x: 2,
//               y: 6,
//               r: 10
//             }
//           ],
//           backgroundColor:"#ff6384",
//           hoverBackgroundColor: "#ff6384"
//       },
//       {
//         label: 'Ringo',
//           data: [
//             {
//               x: 5,
//               y: 3,
//               r: 10
//             }
//           ],
//           backgroundColor:"#ff6384",
//           hoverBackgroundColor: "#ff6384"
//       },
//       {
//         label: 'John',
//           data: [
//             {
//               x: 2,
//               y: 1,
//               r: 10
//             }
//           ],
//           backgroundColor:"#ff6384",
//           hoverBackgroundColor: "#ff6384"
//       },
//       {
//         label: 'George',
//           data: [
//             {
//               x: 1,
//               y: 3,
//               r: 10
//             }
//           ],
//           backgroundColor:"#ff6384",
//           hoverBackgroundColor: "#ff6384"
//       },
//       {
//         label: 'Ringo',
//           data: [
//             {
//               x: 1,
//               y: 1,
//               r: 10
//             }
//           ],
//           backgroundColor:"#ff6384",
//           hoverBackgroundColor: "#ff6384"
//       },
//       {
//         label: 'George',
//           data: [
//             {
//               x: 1,
//               y: 2,
//               r: 10
//             }
//           ],
//           backgroundColor:"#ff6384",
//           hoverBackgroundColor: "#ff6384"
//       }
//       ]
// });
