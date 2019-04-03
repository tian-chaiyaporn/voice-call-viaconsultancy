import axios from 'axios'
import { IP_ADDRESS } from '../../constants/constants'

export const LOG_IN_REQUESTING = 'LOG_IN_REQUESTING'
export const LOG_IN_SUCCEED = 'LOG_IN_SUCCEED'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'
export const LOG_OUT = 'LOG_OUT'

const requestingLogIn = () => ({ type: LOG_IN_REQUESTING })

const logInSucceed = () => ({ type: LOG_IN_SUCCEED })

const logInFails = () => ({ type: LOG_IN_FAIL })

export const logIn = (email, password) => async (dispatch) => {
  dispatch(requestingLogIn())
  try {
    const logInResult = await axios.post(
      `http://${IP_ADDRESS}:3001/log-in`,
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    )
    return dispatch(logInSucceed())
  }
  catch(e) {
    return dispatch(logInFails())
  }
}

export const logout = () => ({ type: LOG_OUT })

