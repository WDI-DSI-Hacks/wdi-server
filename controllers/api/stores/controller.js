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
  Stores
    .dummy(req.params.store, req.params.department, req.params.year)
    .then(results=>{
      res.json(results);
    })
    .catch(err=>{
      console.log(err);
    })
}

module.exports = controller;
