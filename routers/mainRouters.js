const express = require ('express');
const router = express.Router();
const mainControllers = require ('../controllers/mainControllers');

router.get ('/', mainControllers.index);
router.get ('/details', mainControllers.details);
router.get ('/login', mainControllers.login);
router.get ('/register', mainControllers.register);
router.get ('/cart', mainControllers.cart);

module.exports = router;