import asyncHandler from 'express-async-handler';
import User from "../model/userModel.js";
import generateToken from '../utils/generateToken.js';

// @des     Register a user
// @route   POST api/users/register
// @access  Public
const registerUser = asyncHandler(async(req, res) => {
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
const getAllUser = asyncHandler(async(req, res) => {
    const users = await User.find();
    res.status(200).json(users);
})


// @des     Get user by ID
// @route   GET api/users/
// @access  Public
const getUserByID = asyncHandler(async(req, res) => {
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
const loginUser = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if( user && (await user.matchPassword(password))) { // calls matchPassword() from userModel
        generateToken(res, user._id); // fetch id from database

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


// @des     Login User
// @route   POST api/users/login
// @access  Public
const logoutUser = (req, res) => {
    res.cookie('jwt', "", {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({message: 'Logged out successfully'})
}


// @des     User Profile
// @route   GET api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async(req, res) => {
    if(req.user) {
        res.status(200).json({
            _id: req.user._id,
            username: req.user.username,
            email: req.user.email,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
})

// @des     User Profile
// @route   GET api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id);

    if(user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;

        if(req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            email: updatedUser.email,
            username: updatedUser.username,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getAllUser,
    getUserByID,
}