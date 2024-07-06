import express from 'express'
import {
  insertUserChoices,
  getAllStores,
  getStoreById,
  updateStore,
} from '../controllers/storeController.js'

const router = express.Router()

/**
 ** @description:   GET     : Get all stores in database .
 **                 POST    : Creates a new store in database.
 **/
router.route('/').post(insertUserChoices).get(getAllStores)

/**
 ** @description:   GET         : Get store by ID  .
 **                 PUT         : Updates a store in database.
 **                 DELETE      : Deletes a store in database.
 **/
router.route('/:id').get(getStoreById).put(updateStore) //.delete(deleteStore)

export default router
