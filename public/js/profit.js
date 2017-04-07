$(()=>{
  const storeId = $('.inputs').attr('data-store-id');

  function createInputs(){
    const $inputContainer = $('.inputs');
    const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];
    const depts = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
      36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
      54, 55, 56, 58, 59, 60, 65, 67, 71, 72, 74, 77, 78, 79, 80, 81, 82,
      83, 85, 87, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

      const $deptLabel = $('<label>')
        .text('Department')
        .appendTo($inputContainer);

      const $deptSelect = $('<select>',{
        id: 'dept'
      })
        .change((e)=>{
          getSales();
        })
        .appendTo($inputContainer);

      depts.forEach(dept=>{
        const $deptOption = $('<option>',{
          value: dept
        })
        .text(dept)
        .appendTo($deptSelect);

      });

      const $yearLabel = $('<label>')
        .text('Year')
        .appendTo($inputContainer);

      const $yearSelect = $('<select>',{
          id: 'year'
        })
          .appendTo($inputContainer)
          .change((e)=>{
            getSales();
          });

      years.forEach(year=>{
        const $yearOption = $('<option>',{
          value: year,
          id: year
        })
        .text(year)
        .appendTo($yearSelect);
      })
      $yearSelect.val(2017);
      getSales();
  }

  function getSales(){
    const $graphContainer = $('.graph')
      .empty()
      .append($('<p>')
        .text('loading...')
      );
    const year = $('#year').val();
    const dept = $('#dept').val();
    const url = `http://localhost:3000/api/stores/${storeId}/${dept}/${year}`
    $.ajax({
      type: 'GET',
      url: url,
      success:(data)=>{
        console.log(data);
        renderGraph(data, year, dept);
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  function renderGraph(data, year, dep){
    const predicted = year > 2012 ? true : false;
    const $graphContainer = $('.graph')
      .empty();
    const $canvas = $('<canvas>',{
      width: 400,
      height: 300,
      id: 'graph'
    }).appendTo($graphContainer);

    const before = data.filter(result=>{
      return result.week  <= 14;
    })

    const after = data.filter(result=>{
      return result.week >= 14;
    })

    const beforeData = before.map(result=>{
      return {
        x: result.week,
        y: result.profit
      }
    })

    const afterData = after.map(result=>{
      return{
        x: result.week,
        y: result.profit
      }
    })
    const scatterChart = new Chart($canvas, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Past Weeks' ,
            data: beforeData,
            lineTension: 0,
            backgroundColor: predicted ? "rgba( 255, 194, 32, .6)" :"rgba( 0, 125, 198,0.4)",
            borderColor: predicted ? "rgba(244, 115, 33 ,1)" : "rgba( 0, 125, 198, 1)"
        },
        {
            label: 'Future Weeks',
            lineTension: 0,
            data: afterData,
            backgroundColor: predicted ? "rgba(244, 115, 33 ,.4)" :"rgba( 0, 125, 198,0.7)",
            borderColor: predicted ? "rgba(244, 115, 33 ,1)" : "rgba( 0, 125, 198, 1)"
        }
      ]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});
  const $compare = $('<div>', {
    id: 'compare'
  })
  .text(`Compare Department ${dep} Across All Stores`)
  .appendTo($graphContainer)
  .click((e)=>{
    window.location = `http://localhost:3000/stores/${storeId}/department/${dep}`;
  })
  }

  createInputs();
  console.log('I AM WORKING');
});
