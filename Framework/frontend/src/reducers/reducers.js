import {
  INSERT_USER_CHOICES_REQUEST,
  INSERT_USER_CHOICES_SUCCESS,
  INSERT_USER_CHOICES_FAILURE,
  GET_ALL_USER_CHOICES_REQUEST,
  GET_ALL_USER_CHOICES_SUCCESS,
  GET_ALL_USER_CHOICES_FAILURE,
  GET_ALL_USER_CHOICES_RESET,
  STORE_DETAILS_REQUEST,
  STORE_DETAILS_SUCCESS,
  STORE_DETAILS_FAIL,
  STORE_DETAILS_RESET,
  STORE_UPDATE_REQUEST,
  STORE_UPDATE_SUCCESS,
  STORE_UPDATE_FAIL,
  STORE_UPDATE_RESET,
} from '../constants/constants'

const initialState = {
  loading: false,
  success: false,
  error: null,
  userChoices: {},
}

export const userChoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_USER_CHOICES_REQUEST:
      return { ...state, loading: true, success: false, error: null }
    case INSERT_USER_CHOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        userChoices: action.payload,
      }
    case INSERT_USER_CHOICES_FAILURE:
      return { ...state, loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

export const listAllStoresReducer = (state = { listAllStores: [] }, action) => {
  switch (action.type) {
    case GET_ALL_USER_CHOICES_REQUEST:
      return {
        loading: true,
      }
    case GET_ALL_USER_CHOICES_SUCCESS:
      return {
        loading: false,
        listAllStores: action.payload,
      }
    case GET_ALL_USER_CHOICES_FAILURE:
      return {
        loading: false,
        error: action.payload,
      }
    case GET_ALL_USER_CHOICES_RESET:
      return { listAllStores: [] }

    default:
      return state
  }
}

export const storeDetailsReducer = (state = { store: {} }, action) => {
  switch (action.type) {
    case STORE_DETAILS_REQUEST:
      return { loading: true, ...state }
    case STORE_DETAILS_SUCCESS:
      return { loading: false, store: action.payload }
    case STORE_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case STORE_DETAILS_RESET:
      return { storeRecord: {} }
    default:
      return state
  }
}

export const storeUpdateReducer = (state = { store: {} }, action) => {
  switch (action.type) {
    /* On Init pass Loading as true  */
    case STORE_UPDATE_REQUEST:
      return { loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ success flag */
    case STORE_UPDATE_SUCCESS:
      return { loading: false, success: true }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case STORE_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    case STORE_UPDATE_RESET:
      return { store: {} }
    default:
      return state
  }
}
