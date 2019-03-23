import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logInReducer from './screens/LogIn/LogInReducer'

export default store = createStore(
  logInReducer,
  applyMiddleware(thunk)
)

