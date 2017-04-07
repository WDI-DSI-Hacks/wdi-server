const Stores = require('../../models/stores');
const controller = {};
const moment = require('moment');

controller.index = (req, res) =>{
  res.render('stores/index');
}

controller.show = (req, res) =>{
  res.render('stores/show', {storeId: req.params.id});
}

controller.showDep = (req, res) =>{
  res.render('stores/index', {storeId: req.params.id, deptId: req.params.depId});
}


module.exports = controller;
