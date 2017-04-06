const Stores = {};
const db = require('../db');
const requestify = require('requestify');

const dsiURL = process.env.DSI_URL || 'http://localhost:4000/predict';

//http://stackoverflow.com/questions/32126711/asynchronous-function-call-inside-for-loop
Stores.find = (store, department, year)=>{
  return requestify.get(dsiURL,{
    params: {
      Store: store,
      Dept: department,
      year: year
    }
  })
}

Stores.findAll = (week)=>{

  const q1 = db.manyOrNone('SELECT AVG(weekly_sales) AS profit, dept FROM profits WHERE EXTRACT(WEEK FROM week) = $1 GROUP BY dept ORDER BY AVG(weekly_sales) DESC LIMIT 5', [week])
  const q2 = db.manyOrNone('SELECT AVG(weekly_sales) AS profit, dept FROM profits WHERE EXTRACT(WEEK FROM week) = $1 GROUP BY dept ORDER BY AVG(weekly_sales) LIMIT 5', [week])

  return t.batch([q1, q2]);
}

Stores.test = ()=>{
  return requestify.get(dsiURL,{
    params: {
      Store: 1,
      Dept: 1,
      week: 1
    }
  })
}

module.exports = Stores;
