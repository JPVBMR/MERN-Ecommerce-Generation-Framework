export const userControllerFile = `/**
 * @classdesc: User related Controllers to handle routes
 * @function : Routes point directly to a controller
 */

import asyncHandler from 'express-async-handler'
import UserModel from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

/****************************** USER ROUTES ***************************/

/**
 ** @description:  Register User
 ** @route :       POST /api/users
 ** @access:       Public
 ** @params :
 **/
const registerUser = asyncHandler(async (req, resp) => {
  const { name, email, password } = req.body

  const userAlreadyExists = await UserModel.findOne({ email })
  if (userAlreadyExists) {
    resp.status(400)
    throw new Error('User email already registered')
  }

  const newUser = await UserModel.create({
    name,
    email,
    password,
  })

  if (newUser) {
    resp.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(resp, newUser._id), // Generate JWT Token
    })
  } else {
    resp.status(400)
    throw new Error('The given user details are not valid')
  }
})

/**
 ** @description:  Login User & Get JSON Web Token
 ** @route :       POST /api/users/login
 ** @access:       Public
 ** @params :
 **/
const loginUser = asyncHandler(async (req, resp) => {
  /* Find User by request body Email & Password */
  console.log(req.body)
  const { email, password } = req.body
  const user = await UserModel.findOne({ email: email })

  /* If found an email and the encrypted passwords match */
  if (user && (await user.matchPassword(password))) {
    resp.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(resp, user._id), // Generate JWT Token
    })
  } else {
    resp.status(401) //Unauthorized user
    throw new Error('Invalid Email Or Password')
  }
})

/**
 ** @description:  Logout User & Clear Cookie (JSON Web Token)
 ** @route :       POST /api/users/logout
 ** @access:       Private (User already logged in)
 ** @params :
 **/
const logoutUser = asyncHandler(async (req, resp) => {
  // Clear Cookie w/ Token
  resp.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })

  resp.status(200).json({
    message: 'Logged Out Successfully',
  })
})

/**
 ** @description:  Get All Users (ADMIN ROUTE)
 ** @route :       GET /api/users
 ** @access:       Private/Admin
 ** @params :
 **/
const getAllUsers = asyncHandler(async (req, resp) => {
  const users = await UserModel.find({})
  resp.json(users)
})

/**
 ** @description:  Get Users By Id (ADMIN ROUTE)
 ** @route :       GET /api/users/:id
 ** @access:       Private/Admin
 ** @params :
 **/
const getUserById = asyncHandler(async (req, resp) => {
  const user = await UserModel.findById(req.params.id).select('-password') // Get user without the password field

  if (user) {
    resp.json(user)
  } else {
    resp.status(404)
    throw new Error('User Not Found')
  }
})

/**
 ** @description:  Update User (ADMIN ROUTE)
 ** @route :       PUT /api/users/:id
 ** @access:       Private/Admin
 ** @params :
 **/
const updateUser = asyncHandler(async (req, resp) => {
  const user = await UserModel.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()
    resp.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    resp.status(404)
    throw new Error('User Not Found')
  }
})

/**
 ** @description:  Delete user (ADMIN ROUTE)
 ** @route :       DELETE /api/users/:id
 ** @access:       Private/Admin
 ** @params :
 **/
const deleteUser = asyncHandler(async (req, resp) => {
  const user = await UserModel.findById(req.params.id)

  if (user) {
    await user.remove()
    resp.json({ message: 'User Deleted Successfully' })
  } else {
    resp.status(404)
    throw new Error('User Not Found')
  }
})

/****************************** PROFILE ROUTES ***************************/

/**
 ** @description:  Get User Profile
 ** @route :       GET /api/users/profile
 ** @access:       Private
 ** @params :
 **/
const getUserProfile = asyncHandler(async (req, resp) => {
  const user = await UserModel.findById(req.user._id)

  if (user) {
    resp.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    resp.status(404)
    throw new Error('User Not Found')
  }
})

/**
 ** @description:  Update User Profile
 ** @route :       PUT /api/users/profile
 ** @access:       Private
 ** @params :
 **/
const updateUserProfile = asyncHandler(async (req, resp) => {
  const user = await UserModel.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    resp.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    resp.status(404)
    throw new Error('User Not Found')
  }
})

export {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
}

`
