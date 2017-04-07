const router = require('express').Router();
const controller = require('./controller');

// set up routes
router.get('/finddeps', controller.index);
router.get('/department/:id', controller.department);
router.get('/:store/:department/:year', controller.show);


module.exports = router;
