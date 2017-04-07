$(()=>{

  const storeId = $('.inputs').attr('data-store-id');
  const depId = $('.inputs').attr('data-dept-id');

  function createInputs(){
    const $inputContainer = $('.inputs');

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

      $deptSelect.val(depId);
      getSales();

  }

  function getSales(){
    const $graphContainer = $('.graph')
      .empty()
      .append($('<p>')
        .text('loading...')
      );
    const dept = $('#dept').val();
    const url = `http://localhost:3000/api/stores/department/${dept}`
    $.ajax({
      type: 'GET',
      url: url,
      success:(data)=>{
        console.log(data);
        renderGraph(data, dept);
      },
      error: (err)=>{
        console.log(err);
      }
    });
  }

  function renderGraph(data, dep){
    const $graphContainer = $('.graph')
      .empty();
    const $canvas = $('<canvas>',{
      width: 400,
      height: 285,
      id: 'graph'
    }).appendTo($graphContainer);
    data = data.sort((a,b)=>{
      return a.y - b.y;
    })

    const chartData = data.map(result=>{
      return result.y;
    });
    const labels = data.map(result=>{
      return result.x;
    })

    const backgroundColors = data.map(result=>{
      return result.x == storeId ? "rgba( 255, 194, 32, .6)" :"rgba( 0, 125, 198,0.4)";
    })

    const myBarChart = new Chart($canvas, {
    type: 'bar',
    data: {
    labels: labels,
    datasets: [
        {
            label: "Store Sales",
            backgroundColor: backgroundColors,
            borderWidth: 1,
            data: chartData,
        }
    ]
}
});

  }

  createInputs();
  console.log('I AM WORKING');
});
