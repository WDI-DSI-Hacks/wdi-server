const router = require('express').Router();
const controller = require('./controller');

// set up routes
router.get('/:storeId/:departmentId/:weekId', controller.show);

module.exports = router;
