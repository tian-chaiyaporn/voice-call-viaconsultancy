import {
  LOG_IN_REQUESTING,
  LOG_IN_SUCCEED,
  LOG_IN_FAIL,
  LOG_OUT
} from './LogInActions'

const initialState = {
  logInIsRequesting: false,
  isLoggedIn: false,
  shouldShowError: false
}

export default logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUESTING:
      return { ...state, logInIsRequesting: true, shouldShowError: false }
    case LOG_IN_SUCCEED:
      return { ...state, logInIsRequesting: false, isLoggedIn: true } 
    case LOG_IN_FAIL:
      return { ...state, logInIsRequesting: false, isLoggedIn: false, shouldShowError: true }
    case LOG_OUT:
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}

