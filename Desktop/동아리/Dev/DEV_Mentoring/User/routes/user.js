const router = require('express')();

const auth = require('../controllers/user');

router.post('/signUp', auth.createUser);

module.exports = router;