const router = require('express').Router();

// const notes = require('../apiRoutes/notes');

// router.use(notes);

router.use(require('./notes'));

module.exports = router;