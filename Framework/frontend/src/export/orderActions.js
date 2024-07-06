export const orderActionsFile = `import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_MY_LIST_FAIL,
  ORDER_ALL_LIST_REQUEST,
  ORDER_ALL_LIST_SUCCESS,
  ORDER_ALL_LIST_FAIL,
  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
} from '../constants/orderConstants'
import axios from 'axios'

const baseURL = 'http://localhost:5000'

/* ACTION: CREATE ORDER  */
export const createOrderAction = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const configObj = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Bearer \${userInfo.token}\`,
      },
    }

    /* Make the Request */
    const { data } = await axios.post(\`\${baseURL}/api/orders\`, order, configObj)

    /* Dispatch On Success */
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

/* ACTION: GET ORDER DETAILS  */
export const getOrderDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const configObj = {
      headers: {
        Authorization: \`Bearer \${userInfo.token}\`,
      },
    }

    /* Make the Request */
    const { data } = await axios.get(\`\${baseURL}/api/orders/\${id}\`, configObj)

    /* Dispatch On Success */
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

/* ACTION: PAY ORDER  */
export const payOrderAction =
  (orderID, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: \`Bearer \${userInfo.token}\`,
        },
      }

      /* Make the Request */
      const { data } = await axios.put(
        \`\${baseURL}/api/orders/\${orderID}/pay\`,
        paymentResult,
        configObj
      )

      /* Dispatch On Success */
      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      })
    } catch (error) {
      /* Dispatch On Error */
      dispatch({
        type: ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

/* ACTION: DELIVER ORDER (ADMIN)  */
export const deliveryOrderAction = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DELIVER_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const configObj = {
      headers: {
        Authorization: \`Bearer \${userInfo.token}\`,
      },
    }

    /* Make the Request */
    const { data } = await axios.put(
      \`\${baseURL}/api/orders/\${order._id}/deliver\`,
      {},
      configObj
    )

    /* Dispatch On Success */
    dispatch({
      type: ORDER_DELIVER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

/* ACTION: LIST MY ORDERS  */
export const listMyOrdersAction =
  (orderID, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_MY_LIST_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const configObj = {
        headers: {
          Authorization: \`Bearer \${userInfo.token}\`,
        },
      }

      /* Make the Request */
      const { data } = await axios.get(
        \`\${baseURL}/api/orders/myorders\`,
        configObj
      )

      /* Dispatch On Success */
      dispatch({
        type: ORDER_MY_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      /* Dispatch On Error */
      dispatch({
        type: ORDER_MY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

/* ACTION: LIST ALL ORDERS (ADMIN) */
export const listAllOrdersAction =
  (orderID, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_ALL_LIST_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const configObj = {
        headers: {
          Authorization: \`Bearer \${userInfo.token}\`,
        },
      }

      /* Make the Request */
      const { data } = await axios.get(\`\${baseURL}/api/orders\`, configObj)

      /* Dispatch On Success */
      dispatch({
        type: ORDER_ALL_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      /* Dispatch On Error */
      dispatch({
        type: ORDER_ALL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
`
