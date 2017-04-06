
	window.onload = function () {
		var chart = new CanvasJS.Chart("chartContainer", {

			title:{
				text:"Wal-Mart Finances"				

			},
                        animationEnabled: true,
			axisX:{
				interval: 1,
				gridThickness: 0,
				labelFontSize: 10,
				labelFontStyle: "normal",
				labelFontWeight: "normal",
				labelFontFamily: "Lucida Sans Unicode"

			},
			axisY2:{
				interlacedColor: "rgba(1,77,101,.2)",
				gridColor: "rgba(1,77,101,.1)"

			},

			data: [
			{     
				type: "bar",
                name: "companies",
				axisYType: "secondary",
				color: "#014D65",				
				dataPoints: [
				
				{y: 5, label: "Sweden"  },
				{y: 6, label: "Taiwan"  },
				{y: 7, label: "Russia"  },
				{y: 8, label: "Spain"  },
				{y: 8, label: "Brazil"  },
				{y: 8, label: "India"  },
				{y: 9, label: "Italy"  },
				{y: 9, label: "Australia"  },
				{y: 12, label: "Canada"  },
				{y: 13, label: "South Korea"  },
				{y: 13, label: "Netherlands"  },
				{y: 15, label: "Switzerland"  },
				{y: 28, label: "Britain" },
				{y: 32, label: "Germany"   },
				{y: 32, label: "France"  },
				{y: 68, label: "Japan"   },
				{y: 73, label: "China"},
				{y: 132, label: "US" }
				]
			}
			
			]
		});

chart.render();
};

console.log('Main JS is working')


window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        zoomEnabled: true,
        animationEnabled: true,
        title: {
            text: "Top vs Low Departments"


        },
        axisX: {
            title: "Revenue (millions USD)",
            valueFormatString: "#0.#",
            maximum: 17,
            minimum: -.1,
            gridThickness: 1,
            tickThickness: 1,
            gridColor: "lightgrey",
            tickColor: "lightgrey",
            lineThickness: 0
        },
        axisY: {
            title: "Departments(Profits)",
            gridThickness: 1,
            tickThickness: 1,
            gridColor: "lightgrey",
            tickColor: "lightgrey",
            lineThickness: 0,
            valueFormatString: "#,##0k,.",
            maximum: 250000,
            interval: 50000

        },

        data: [{
            type: "bubble",
            toolTipContent: "<span style='\"'color: {color};'\"'><strong>{label}</strong></span><br/> <strong>Land Area</strong> {x} mn sq. km <br/> <strong>Rail Road</strong> {y} km<br/> <strong>Population</strong> {z} mn",
            dataPoints: [
                { x: 9.14, y: 228513, z: 309.34, label: "Store1" },
                { x: 16.37, y: 85292, z: 141.92, label: "Store2" },
                { x: 1.21, y: 22051, z: 49.99, label: "Store3" },
                { x: 9.327, y: 66239, z: 1337, label: "Store4" },
                { x: 9.09, y: 58345, z: 34.12, label: "Store5" },
                { x: 8.45, y: 29817, z: 194.94, label: "Store6" },
                { x: 7.68, y: 8615, z: 22.29, label: "Store7" },
                { x: 2.97, y: 63974, z: 1224.61, label: "Store8" },
                { x: 2.73, y: 25023, z: 40.41, label: "Store9" },
                { x: 1.94, y: 26704, z: 113.42, label: "Store10" },



            ]
        }]
    });

    chart.render();
}

