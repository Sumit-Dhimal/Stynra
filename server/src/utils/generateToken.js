import jwt from 'jsonwebtoken';

const generateToken = (res, userID) => {

    // genrates a JWT with payload (userId) 
    // signs it using a secret key from your environment variables
    // expiers in 30 days
    const token = jwt.sign(
        {userID}, 
        process.env.JWT_SECRET, 
        {expiresIn: '30d',
    })

    // used to set cookie in the client's browser
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Use secure cookie in production
        sameSite: 'strict', // prevent CSRF (Cross-site-request-forgery) attacks
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30days 
    });
};

export default generateToken;