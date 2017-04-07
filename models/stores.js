const Stores = {};
const db = require('../db');
const requestify = require('requestify');

const dsiURL = process.env.DSI_URL || 'http://localhost:4000/';


Stores.find = (store, department)=>{
  return requestify.get(dsiURL + 'predict',{
    params: {
      Store: store,
      Dept: department,
    }
  })
}

Stores.findAll = (week)=>{
  return db.task(t=>{
    const q1 = t.manyOrNone('SELECT AVG(weekly_sales) AS profit, dept FROM profits WHERE EXTRACT(WEEK FROM week) = $1 GROUP BY dept ORDER BY AVG(weekly_sales) DESC LIMIT 5', [week])
    const q2 = t.manyOrNone('SELECT AVG(weekly_sales) AS profit, dept FROM profits WHERE EXTRACT(WEEK FROM week) = $1 GROUP BY dept ORDER BY AVG(weekly_sales) LIMIT 5', [week])
    return t.batch([q1, q2]);
  })

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

Stores.dummy = (store, department, year) =>{
  return db.manyOrNone('SELECT EXTRACT(WEEK FROM week) AS week, weekly_sales AS profit FROM profits WHERE EXTRACT(YEAR FROM week) = $1 AND dept=$2 AND store=$3', [year, department, store])
}

Stores.department = (dep) =>{
  return requestify.get(dsiURL + 'dept',{
    params: {
      Dept: dep,
    }
  });
}



module.exports = Stores;
