export const userActionsFile = `import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../constants/userConstants'

import { ORDER_MY_LIST_RESET } from '../constants/orderConstants'

//Login action to make the request and get the Token
export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const configObj = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    /* Make the Request */
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      configObj
    )

    /* Dispatch On Success */
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    /* Save the user at the Local Storage */
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({
    type: USER_LOGOUT,
  })

  dispatch({
    type: USER_DETAILS_RESET,
  })

  dispatch({
    type: USER_LIST_RESET,
  })

  dispatch({
    type: ORDER_MY_LIST_RESET,
  })
}

//Register action to make the request and get the Token
export const registerAction = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const configObj = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    /* Make the Request */
    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      configObj
    )

    /* Dispatch On Success */
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    //Auto-Login after Successful Register
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    /* Save the user at the Local Storage */
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//GET User Details Action : Id is the UserId or the "profile"
export const getUserDetailsAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
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
    const { data } = await axios.get(\`/api/users/\${id}\`, configObj)

    /* Dispatch On Success */
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//UPDATE USER PROFILE Action
export const updateUserProfileAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
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
    const { data } = await axios.put('/api/users/profile', user, configObj)

    /* Dispatch On Success */
    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })

    //Auto-Login after Successful Update
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    /* Save the user at the Local Storage */
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//GET All Users Action
export const listAllUsersAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
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
    const { data } = await axios.get('/api/users', configObj)

    /* Dispatch On Success */
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//DELETE User Action
export const deleteUserAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
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
    await axios.delete(\`/api/users/\${id}\`, configObj)

    /* Dispatch On Success */
    dispatch({
      type: USER_DELETE_SUCCESS,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: USER_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

//UPDATE User Action
export const updateUserAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
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
    const { data } = await axios.put(\`/api/users/\${user._id}\`, user, configObj)

    /* Dispatch On Success */
    dispatch({
      type: USER_UPDATE_SUCCESS,
    })

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    /* Dispatch On Error */
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
`
