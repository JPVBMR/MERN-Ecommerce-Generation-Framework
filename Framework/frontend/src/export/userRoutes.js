export const userRoutesFile = `import express from 'express'
import {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js'

import {
  protectMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js'
const router = express.Router()

/**
 ** @description:   POST : executes the Register Operation.
 **                 GET  : executes GetAllUsers Operation (Protected via middleware User must be logged in and isAdmin=TRUE )
 **/
router
  .route('/')
  .post(registerUser)
  .get(protectMiddleware, adminMiddleware, getAllUsers)

/**
 ** @description:   PUT  : executes the UpdateUserProfile Operation.
 **                 GET  : executes GetUserProfile Operation (Protected via middleware User must be logged in )
 **/
router
  .route('/profile')
  .get(protectMiddleware, getUserProfile)
  .put(protectMiddleware, updateUserProfile)

/**
 ** @description:   PUT  : executes the UpdateUser Operation  (Logged In + Admin Operation )
 **                 GET  : executes getUserById Operation  (Logged In + Admin Operation )
 **                 DELETE: executes deleteUser (Logged In + Admin Operation )
 **/
router
  .route('/:id')
  .delete(protectMiddleware, adminMiddleware, deleteUser)
  .get(protectMiddleware, adminMiddleware, getUserById)
  .put(protectMiddleware, adminMiddleware, updateUser)

router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router
`
