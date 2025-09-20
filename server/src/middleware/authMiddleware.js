import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../model/userModel.js';

const protect = asyncHandler(async(req, res, next) => {
    let token = req.cookies.jwt;

    if(token) {
        try {

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Attach user info to request
            req.user = await User.findById(decoded.userID).select('-password');
    
            // give control to the next middleware
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Unauthorized access, token failed!");
        }
    } else {
        res.status(401);
        throw new Error("Unauthorized access, no token!");
    }
})

export {protect};