const router = require('express').Router();
const controller = require('./controller');

// set up routes
router.get('/finddeps', controller.index);
router.get('/:store/:department/:year', controller.show);

module.exports = router;
