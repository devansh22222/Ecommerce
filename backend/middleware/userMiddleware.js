const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');
const cookieParser = require('cookie-parser')


const userMiddleware = async (req,res,next)=>{
    const token = req.headers['token'];
    if(!token){
        return res.status(401).json({success : false, message : "Not Authorised"})
    }
    else{
        try {
        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

        // req.user has the userID
        req.user = tokenDecoded.id

        next();

        } catch (error) {
            return res.status(401).json({success : false, message : error.message})
        }
    }
    
}

module.exports = userMiddleware;
