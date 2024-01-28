const auth = require('../controllers/auth.js');
const { Router } = require('express');


const router = Router();

router.post('/login', auth.login);
router.get('/logged', auth.logged)
router.post('/logout', auth.logout);
router.get('/google/url', auth.url)
router.get('/google/login', auth.loginByGoogle);

module.exports = router;