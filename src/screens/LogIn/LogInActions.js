import axios from 'axios'

export const LOG_IN_REQUESTING = 'LOG_IN_REQUESTING'
export const LOG_IN_SUCCEED = 'LOG_IN_SUCCEED'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'

export const logIn = (email, password) => async (dispatch) => {
  dispatch(requestingLogIn())
  try {
    const logInSucceed = await axios.post(
      'http://localhost:3000/login',
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    )
    dispatch(logInSucceed())
  }
  catch(e) {
    dispatch(logInFails())
  }
}

const requestingLogIn = () => ({ type: LOG_IN_REQUESTING })

const logInSucceed = () => ({ type: LOG_IN_SUCCEED })

const logInFails = () => ({ type: LOG_IN_FAIL })

