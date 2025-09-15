import mongoose from 'mongoose';

// NOTE: mongoose.createConnection -> does not return promise so the function should not be asynchoronus

const connectDB = () => {
    try {
        const conn = mongoose.createConnection(process.env.MONGO_URI);
    
        // single cluster -> multiple databse
        const usersDB = conn.useDb("usersDB");
        
        conn.once('open', () => {
            console.log("MongoDB connected successfully");
        });

        conn.on('error', (err) => {
            console.error(`MongoDB connection Error: ${err.message}`);
        })    

        return { usersDB };
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
        process.exit(1);
    }
    
}

export default connectDB;