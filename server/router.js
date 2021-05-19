const router = require('express').Router();
const apiFunc = require('./apiFunc.js');

router
  .route('/representatives')
  .get(apiFunc.getRepresentatives)

module.exports = router;