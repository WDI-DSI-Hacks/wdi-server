const Stores = require('../../models/stores');
const controller = {};
const moment = require('moment');

controller.show = (req, res) =>{
  res.render('stores/show', {storeId: req.params.id});
}


module.exports = controller;
