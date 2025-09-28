import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import errorMiddleware from './middleware/errorMiddleware.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use('/api/users', userRoute);


app.get('/api', (req, res) => {
    res.send("Connection success");
})

// error middlware
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})