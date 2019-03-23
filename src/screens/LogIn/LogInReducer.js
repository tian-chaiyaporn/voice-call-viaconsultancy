import {
  LOG_IN_REQUESTING,
  LOG_IN_SUCCEED,
  LOG_IN_FAIL
} from './LogInActions'

const initialState = {
  logInSucceed: false
}

export default logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUESTING:
      return { ...state, logInIsRequesting: true }
    case LOG_IN_SUCCEED:
      return { ...state, logInIsRequesting: false } 
    case LOG_IN_FAIL:
      return { ...state, logInIsRequesting: false}
    default:
      return state
  }
}

