import asyncHandler from 'express-async-handler';
import User from "../model/userModel.js";

// @des     Register a user
// @route   POST api/users/register
// @access  Public
export const registerUser = asyncHandler(async(req, res) => {
    const { username, email, password} = req.body;

    // if email already exists
    // const userExists = await User.findOne({email});

    // if(userExists)

    const user = await User.create({
        username, 
        email, 
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

    //res.send("Register User");
});

// @des     Get all users
// @route   GET api/users/
// @access  Public
export const getAllUser = (req, res) => {
    res.send("Get all users");
}

// @des     Get user by ID
// @route   GET api/users/
// @access  Public
export const getUserByID = (req, res) => {
    res.send("Get user by ID");
}

