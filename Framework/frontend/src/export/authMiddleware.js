export const authMiddlewareFile = `import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import UserModel from '../models/userModel.js'
import userChoices from '../../frontend/src/userChoices.json' assert { type: 'json' }

//Middleware to Protect Routes
const protectMiddleware = asyncHandler(async (req, res, next) => {
  const jwtSecret = userChoices.authPages.JWT_SECRET
  //Get JWT from Cookie
  const authorizationHeader = req.headers.authorization
  var token = authorizationHeader.split(' ')[1]

  if (token) {
    try {
      //Decode the token to get the UserID
      const tokenDecoded = jwt.verify(token, jwtSecret)
      req.user = await UserModel.findById(tokenDecoded.userID).select(
        '-password'
      )
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error(
        'Error: Insuficient permissions to permform this action. Invalid Token'
      )
    }
  } else {
    res.status(401)
    throw new Error(
      'Authentication Failed. Insuficient permissions to permform this action.'
    )
  }
})

/** Admin Middleware */
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as Admin.')
  }
}

export { protectMiddleware, adminMiddleware }
`
