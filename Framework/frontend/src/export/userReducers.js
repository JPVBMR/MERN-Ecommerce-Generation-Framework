export const userReducersFile = `import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_DETAILS_RESET,
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
  USER_UPDATE_RESET,
} from '../constants/userConstants'

/**
 ** @name: LOGIN / LOGOUT REDUCER
 ** @description:  Reducer to handle the Login Request States
 ** @params :  Initial State with an empty object, and an Action that it's an object.
 **/
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    /* On Init pass Loading as true */
    case USER_LOGIN_REQUEST:
      return { loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ User Info */
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGOUT:
      return {}

    default:
      return state
  }
}

/**
 ** @name: REGISTER REDUCER
 ** @description:  Reducer to handle the REGISTER Request States
 ** @params :  Initial State with an empty object, and an Action that it's an object.
 **/
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    /* On Init pass Loading as true */
    case USER_REGISTER_REQUEST:
      return { loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ User Info */
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

/**
 ** @name: USER DETAILS REDUCER
 ** @description:  Reducer to handle the USER DETAILS Request States
 ** @params :  Initial State with an object w/ an empty User, and an Action that it's an object.
 **/
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    /* On Init pass Loading as true and whatever was in the State */
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ User Info */
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case USER_DETAILS_RESET:
      return { user: {} }

    default:
      return state
  }
}

/**
 ** @name: UPDATE USER PROFILE REDUCER
 ** @description:  Reducer to handle the UPDATE USER PROFILE Request States
 ** @params :  Initial State with an object empty, and an Action that it's an object.
 **/
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    /* On Init pass Loading as true and whatever was in the State */
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ User Info */
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }

    case USER_UPDATE_PROFILE_RESET:
      return {}

    default:
      return state
  }
}

/**
 ** @name: ADMIN: GET ALL USERS LIST REDUCER
 ** @description:  Reducer to handle the Get All Users Request States
 ** @params :  Initial State with an object empty, and an Action that it's an object.
 **/
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    /* On Init pass Loading as true  */
    case USER_LIST_REQUEST:
      return { loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ Users */
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload }

    case USER_LIST_RESET:
      return { users: [] }

    default:
      return state
  }
}

/**
 ** @name: ADMIN: DELETE USER REDUCER
 ** @description:  Reducer to handle the DELETE USER Request States
 ** @params :  Initial State with an object empty, and an Action that it's an object.
 **/
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    /* On Init pass Loading as true  */
    case USER_DELETE_REQUEST:
      return { loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ success flag */
    case USER_DELETE_SUCCESS:
      return { loading: false, success: true }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case USER_DELETE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

/**
 ** @name: ADMIN: UPDATE USER REDUCER
 ** @description:  Reducer to handle the Update USER Request States
 ** @params :  Initial State with an object empty, and an Action that it's an object.
 **/
export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    /* On Init pass Loading as true  */
    case USER_UPDATE_REQUEST:
      return { loading: true }

    /* On Success pass Loading as false, set the Action Payload w/ success flag */
    case USER_UPDATE_SUCCESS:
      return { loading: false, success: true }

    /* On ERROR pass Loading as false, set the Action Payload as the value for the error */
    case USER_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    case USER_UPDATE_RESET:
      return { user: {} }
    default:
      return state
  }
}
`
