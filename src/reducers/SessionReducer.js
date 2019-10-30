import {
  INVALID,
  LOGGED_IN,
  LOGIN_IN_PROGRESS,
  REGISTERED,
  REGISTRATION_IN_PROGRESS,
  REGISTER_SUCCESS,
  UNKNOWN,
} from './types'

const defaultStore = {
  state: UNKNOWN,
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
  case 'INITIALISE_SESSION':
    let state = UNKNOWN
    return {...store, state: state}
  case 'LOGIN_SUCCESS':
    return {...store, state: LOGGED_IN}
  case 'LOGIN_REQUEST':
    return {...store, state: LOGIN_IN_PROGRESS}
  case 'REGISTER_SUCCESS':
    return {...store, state: REGISTER_SUCCESS}
  case 'REGISTER_REQUEST':
    return {...store, state: REGISTRATION_IN_PROGRESS}
  case 'SESSION_ERROR':
    return {...store, state: INVALID}
  case 'SET_SESSION_STATE':
    return {...store, state: action.payload}
  default:
    return {...store }
  }
}

export default reducer