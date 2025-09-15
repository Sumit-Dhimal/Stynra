import mongoose from "mongoose";
import connectDB from "../config/db";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

const { usersDB } = connectDB();
const User = usersDB.model('User', userSchema);

export default User;