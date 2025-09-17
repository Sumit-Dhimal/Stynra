import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/users', userRoute);


app.get('/api', (req, res) => {
    res.send("Connection success");
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})