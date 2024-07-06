export const orderRoutesFile = `import express from 'express'
import {
  createNewOrder,
  getOrderByID,
  updateOrderToPaid,
  updateOrderDelivery,
  getMyOrders,
  getAllOrders,
} from '../controllers/orderController.js'

import {
  protectMiddleware,
  adminMiddleware,
} from '../middleware/authMiddleware.js'

const router = express.Router()

/**
 ** @description:   GET     : executes the getAllOrders (ADMIN) .
 **                 POST    : executes the createNewOrder.
 **/
router
  .route('/')
  .post(protectMiddleware, createNewOrder)
  .get(protectMiddleware, adminMiddleware, getAllOrders)

/**
 ** @description:   GET : Gets Logged In User Orders.
 ** @route :        GET /api/orders/myorders
 **/
router.route('/myorders').get(protectMiddleware, getMyOrders)

/**
 ** @description:   GET Order By ID
 ** @route :        GET /api/orders/:id
 **/
router.route('/:id').get(protectMiddleware, getOrderByID)

/**
 ** @description:   PUT: Update Order to paid
 ** @route :        PUT /api/orders/:id/pay
 **/
router.route('/:id/pay').put(protectMiddleware, updateOrderToPaid)

/**
 ** @description:   PUT: Update Order to delivered
 ** @route :        PUT /api/orders/:id/deliver
 **/
router
  .route('/:id/deliver')
  .put(protectMiddleware, adminMiddleware, updateOrderDelivery)

export default router
`
