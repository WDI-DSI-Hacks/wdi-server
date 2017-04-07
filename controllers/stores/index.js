const router = require('express').Router();
const controller = require('./controller');

// set up routes
router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/:id/department/:depId', controller.showDep);

module.exports = router;
