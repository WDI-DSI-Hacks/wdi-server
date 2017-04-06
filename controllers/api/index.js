const router = require('express').Router();

// set api routes
router.use('/stores/', require('./stores/'));

module.exports = router;
