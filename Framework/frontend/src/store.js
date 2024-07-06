import { configureStore } from '@reduxjs/toolkit'
import {
  userChoicesReducer,
  listAllStoresReducer,
  storeDetailsReducer,
  storeUpdateReducer,
} from '../src/reducers/reducers' // Importe o novo reducer

export const store = configureStore({
  reducer: {
    userChoices: userChoicesReducer,
    allStoresList: listAllStoresReducer,

    storeDetails: storeDetailsReducer,
    storeUpdate: storeUpdateReducer,
  },
})

export default store
