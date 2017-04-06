// set up router
const router = require('express').Router();

// routes!
// api
router.use('/api/', require('./controllers/api/'));
// home
router.get('/', (req, res) => {
  res.render('index');
});
// movies
router.use('/stores/', require('./controllers/stores/'));


module.exports = router;
