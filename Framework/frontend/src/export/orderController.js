export const orderControllerFile = `/**
 * @classdesc: Order related controllers to handle routes in the backend
 * @function : Orders routes point directly to a controller
 */

import asyncHandler from 'express-async-handler'
import OrderModel from '../models/orderModel.js'

/**
 ** @description:  Create a new Order
 ** @route :       POST /api/orders
 ** @access:       Private/Protected
 ** @params :
 **/
const createNewOrder = asyncHandler(async (req, resp) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    resp.status(400)
    throw new Error('There are no order items')
    return
  } else {
    const newOrder = new OrderModel({
      orderItems,
      owner: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await newOrder.save()

    resp.status(201).json(createdOrder)
  }
})

/**
 ** @description:  GET Order By ID
 ** @route :       GET /api/orders/:id
 ** @access:       Private/Protected
 ** @params :
 **/
const getOrderByID = asyncHandler(async (req, resp) => {
  const order = await OrderModel.findById(req.params.id).populate(
    'owner',
    'name email'
  )

  if (order) {
    resp.json(order)
  } else {
    resp.status(404)
    throw new Error('Order Not Found')
  }
})

/**
 ** @description:  Update Order To Paid
 ** @route :       PUT /api/orders/:id/pay
 ** @access:       Private/Protected
 ** @params :
 **/
const updateOrderToPaid = asyncHandler(async (req, resp) => {
  const order = await OrderModel.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.payment_timestamp = Date.now()
    order.paymentResult = {
      //Added from PayPal
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    resp.json(updatedOrder)
  } else {
    resp.status(404)
    throw new Error('Order Not Found')
  }
})

/**
 ** @description:  Update Order To Delivered
 ** @route :       PUT /api/orders/:id/deliver
 ** @access:       Private/Admin
 ** @params :
 **/
const updateOrderDelivery = asyncHandler(async (req, resp) => {
  const order = await OrderModel.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.delivery_timestamp = Date.now()
    const updatedOrder = await order.save()

    resp.json(updatedOrder)
  } else {
    resp.status(404)
    throw new Error('Order Not Found')
  }
})

/**
 ** @description:  Get logged in user orders
 ** @route :       GET /api/orders/myorders
 ** @access:       Private/Protected
 ** @params :
 **/
const getMyOrders = asyncHandler(async (req, resp) => {
  const myOrders = await OrderModel.find({ owner: req.user._id })
  resp.json(myOrders)
})

/**
 ** @description:  Get All orders
 ** @route :       GET /api/orders
 ** @access:       Private/Admin
 ** @params :
 **/
const getAllOrders = asyncHandler(async (req, resp) => {
  const orders = await OrderModel.find({}).populate('owner', 'id name')
  resp.json(orders)
})

export {
  createNewOrder,
  getOrderByID,
  updateOrderToPaid,
  updateOrderDelivery,
  getMyOrders,
  getAllOrders,
}
`
