console.log('Main JS is working')


 window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      zoomEnabled: true,
      animationEnabled: true,
      title:{
        text: "Top vs Low Departments"


      },
      axisX: {
        title:"Revenue (millions USD)",
        valueFormatString: "#0.#",
        maximum: 17,
        minimum: -.1,
        gridThickness: 1,
  tickThickness: 1,
        gridColor: "lightgrey",
        tickColor: "lightgrey",
        lineThickness: 0
      },
      axisY:{
        title: "Departments(Profits)",
        gridThickness: 1,
  tickThickness: 1,
        gridColor: "lightgrey",
        tickColor: "lightgrey",
        lineThickness: 0,
        valueFormatString:"#,##0k,.",
        maximum: 250000,
        interval: 50000

      },

      data: [
      {
        type: "bubble",
        toolTipContent: "<span style='\"'color: {color};'\"'><strong>{label}</strong></span><br/> <strong>Land Area</strong> {x} mn sq. km <br/> <strong>Rail Road</strong> {y} km<br/> <strong>Population</strong> {z} mn",
        dataPoints: [
        { x: 9.14, y: 228513, z:309.34,  label:"Store1" },
        { x: 16.37, y: 85292, z:141.92,  label:"Russia" },
        { x: 9.327, y: 66239, z:1337,  label:"China" },
        { x: 9.09, y: 58345, z:34.12,  label:"Canada" },
        { x: 8.45, y: 29817, z:194.94,  label:"Brazil" },
        { x: 7.68, y: 8615, z:22.29,  label:"Australia" },
        { x: 2.97, y: 63974, z:1224.61,  label:"India" },
        { x: 2.73, y: 25023, z:40.41,  label:"Argentina" },
        { x: 1.94, y: 26704, z:113.42,  label:"Mexico" },
        { x: 1.21, y: 22051, z:49.99,  label:"SA" },
        { x: .547, y: 33608, z:65.07,  label:"France" },
        { x: .241, y: 31471, z:62.23,  label:"U.K" },
        { x: .348, y: 33708, z:81.77,  label:"Germany" },
        { x: .364, y: 20035, z:127.45,  label:"Japan" },
        { x: .995, y: 5195, z:81.12,  label:"Egypt" },
        { x: .743, y: 5352, z:17.11,  label:"Chile" }


        ]
      }
      ]
    });

chart.render();
}
