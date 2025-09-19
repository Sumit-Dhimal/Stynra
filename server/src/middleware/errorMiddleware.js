// this middleware is called automatically when express detects error

const errorMiddleware = (err, req, res, next) => {
    // if error comes with 200 statusCode 
    const statusCode = res.statusCode === 200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};

export default errorMiddleware;