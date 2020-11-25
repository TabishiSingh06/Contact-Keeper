const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next) {
    //this is where we get token from header
    const token = req.header('x-auth-token'); 
    //x-auth-token is basically the key inside the token 

    //check if the token doesn't exist
    if(!token) {
        return res.status(401).json({msg: 'Token does not exist: Authorization Denied'});
    } 
    
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();    
    } catch (err) {
        res.status(401).json({msg: 'Token is not valid'});
    }
};

