import axios from 'axios'
import {
  INSERT_USER_CHOICES_REQUEST,
  INSERT_USER_CHOICES_SUCCESS,
  INSERT_USER_CHOICES_FAILURE,
  GET_ALL_USER_CHOICES_REQUEST,
  GET_ALL_USER_CHOICES_SUCCESS,
  GET_ALL_USER_CHOICES_FAILURE,
  STORE_DETAILS_REQUEST,
  STORE_DETAILS_SUCCESS,
  STORE_DETAILS_FAIL,
  STORE_UPDATE_REQUEST,
  STORE_UPDATE_SUCCESS,
  STORE_UPDATE_FAIL,
} from '../constants/constants'

export const insertUserChoices = (userChoices) => async (dispatch) => {
  try {
    dispatch({ type: INSERT_USER_CHOICES_REQUEST })

    const response = await axios.post('http://localhost:5000/api/store', {
      userChoices,
    })

    dispatch({ type: INSERT_USER_CHOICES_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({
      type: INSERT_USER_CHOICES_FAILURE,
      payload: error.response.data.message || 'Erro ao salvar no MongoDB.',
    })
  }
}

/* ACTION: LIST ALL ORDERS (ADMIN) */
export const listAllStoresAction =
  (orderID, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ALL_USER_CHOICES_REQUEST,
      })

      /* Make the Request */
      const { data } = await axios.get('http://localhost:5000/api/store')

      /* Dispatch On Success */
      dispatch({
        type: GET_ALL_USER_CHOICES_SUCCESS,
        payload: data,
      })
    } catch (error) {
      /* Dispatch On Error */
      dispatch({
        type: GET_ALL_USER_CHOICES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

/* GET STORE CONFIG BY ID */
export const getStoreDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STORE_DETAILS_REQUEST })

    const configObj = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.get(
      `http://localhost:5000/api/store/${id}`,
      configObj
    )

    dispatch({
      type: STORE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STORE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateStoreAction = (store) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_UPDATE_REQUEST,
    })

    const configObj = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log('store to update', store)
    /* Make the Request */
    const { data } = await axios.put(
      `http://localhost:5000/api/store/${store._id}`,
      store,
      configObj
    )

    /* Dispatch On Success */
    dispatch({
      type: STORE_UPDATE_SUCCESS,
    })

    dispatch({
      type: STORE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: STORE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
