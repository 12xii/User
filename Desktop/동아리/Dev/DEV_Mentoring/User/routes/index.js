const router = require('express')();

const user = require('./user');

router.use('/auth', user);

module.exports = router;