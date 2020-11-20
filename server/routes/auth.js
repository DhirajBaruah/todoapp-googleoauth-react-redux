const { Router } = require("express");
const router = Router();
const passport = require('passport');

const {authToProfile, sendUser} = require('../controllers/auth');
const {authenticate} = require('../services/auth');

//params

/**
 * @ route   GET /auth
 * @ desc    Authenticates with google
 * @ access  Public
 */
router.get('/', passport.authenticate('google', {
    scope: ['profile']
}));


/**
 * @ route   GET /auth/redirect
 * @ desc    callback route for google to redirect to 
 * @ access  private
 */
router.get('/redirect', passport.authenticate('google'), authToProfile);

/**
 * @ route   GET /auth/logout
 * @ desc    logout
 * @ access  private
 */
router.get('/logout', function(req, res) {
    console.log("I am Logout")
    req.logout(); 
    res.json({ 
            status: "logout",
            msg:"Please Log In again"
         });
});

/**
 * @ route   GET /auth/user
 * @ desc    send user data
 * @ access  private
 */
router.get('/user', authenticate, sendUser);




module.exports = router;