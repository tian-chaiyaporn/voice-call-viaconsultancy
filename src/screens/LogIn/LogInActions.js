import axios from 'axios'

export const LOG_IN_REQUESTING = 'LOG_IN_REQUESTING'
export const LOG_IN_SUCCEED = 'LOG_IN_SUCCEED'
export const LOG_IN_FAIL = 'LOG_IN_FAIL'
export const LOG_OUT = 'LOG_OUT'

const requestingLogIn = () => ({ type: LOG_IN_REQUESTING })

const logInSucceed = () => ({ type: LOG_IN_SUCCEED })

const logInFails = () => ({ type: LOG_IN_FAIL })

export const logIn = (email, password) => async (dispatch) => {
  dispatch(requestingLogIn())
  console.log('requesting')
  try {
    const logInResult = await axios.post(
      'http://localhost:3000/log-in',
      { email, password },
      { headers: { 'Content-Type': 'application/json' } }
    )
    console.log('log in succeed', logInSucceed)
    return dispatch(logInSucceed())
  }
  catch(e) {
    console.log('log in fails', e)
    return dispatch(logInFails())
  }
}

export const logout = () => ({ type: LOG_OUT })

