const Stores = require('../../../models/stores');
const moment = require('moment');
const controller = {};

controller.index = (req,res)=>{
  const week = new Date()
  Stores
    .findAll(moment().week())
    .then(data=>{
      const top = data[0];
      const low = data[1];

      res.json({
        dep:{
          top: top,
          low: low
        }
      });
    })
    .catch(err=>{
      console.log(err);
    });
}

controller.show = (req, res) =>{
  const store = req.params.store;
  const department = req.params.department;
  const year = req.params.year;

  if (parseInt(req.params.year) > 2012){
    Stores
    .find(store, department)
    .then(results =>{
      const body = JSON.parse(results.getBody());
      console.log(body);

      const data = body["Weekly_Sales"].map((sales, i)=>{
        return {
          week: i+1,
          profit: sales
        }
      })
      res.json(data);
    })
    .catch(err=>{
      console.log(err)
    });

  } else {
    Stores
      .dummy(store, department, year)
      .then(results=>{
        res.json(results);
      })
      .catch(err=>{
        console.log(err);
      });
  }
}

module.exports = controller;
