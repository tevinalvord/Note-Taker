const router = require('express');
// const notes = require('../apiRoutes/notes');

// router.use(notes);

router.use(require('./notes'));

module.exports = router;