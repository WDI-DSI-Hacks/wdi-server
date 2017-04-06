const Stores = require('../../../models/stores');
const controller = {};

controller.index = (req,res)=>{
  Stores
    .findAll()
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
  Stores
    .find(store, department, year)
    .then(results=>{
      res.json(results);
    })
    .catch(err=>{
      console.log(err);
    })
}

module.exports = controller;
