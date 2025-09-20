import asyncHandler from 'express-async-handler';
import User from "../model/userModel.js";
import generateToken from '../utils/generateToken.js';

// @des     Register a user
// @route   POST api/users/register
// @access  Public
export const registerUser = asyncHandler(async(req, res) => {
    const { username, email, password} = req.body;

    // if email already exists
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        username, 
        email, 
        password,
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.username,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


// @des     Get all users
// @route   GET api/users/
// @access  Public
export const getAllUser = asyncHandler(async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})


// @des     Get user by ID
// @route   GET api/users/
// @access  Public
export const getUserByID = asyncHandler(async(req, res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404);
        throw new Error("User not found");
    }
})


// @des     Login User
// @route   POST api/users/login
// @access  Public
export const loginUser = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if( user && (await user.matchPassword(password))) { // calls matchPassword() from userModel
        generateToken(res, user.userID);

        res.json({
            _id: user._id,
            name: user.username,
            email: user.email,
        })
    } else {
        res.status(401).json({
            message: "Invalid E-mail or Password"
        })
    }
}


// @des     User Profile
// @route   GET api/users/profile
// @access  Private
export const userProfile = (req, res) => {

}
