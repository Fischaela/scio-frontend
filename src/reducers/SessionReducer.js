import {
  INVALID,
  LOGGED_IN,
  LOGIN_IN_PROGRESS,
  LOGGED_OUT,
  REGISTRATION_IN_PROGRESS,
  REGISTER_SUCCESS,
  UNKNOWN,
} from './types'

import {
  SCIO_LOCALSTORAGE_ID,
} from '../config'

const defaultStore = {
  sessionError: null,
  state: UNKNOWN,
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
  case 'INITIALISE_SESSION':
    let state = UNKNOWN
    if (localStorage.getItem(SCIO_LOCALSTORAGE_ID) === 'LOGGED_IN') {
      state = LOGGED_IN
    }
    return {...store, state: state}
  case 'LOGIN_SUCCESS':
    return {...store, state: LOGGED_IN}
  case 'LOGIN_REQUEST':
    return {...store, state: LOGIN_IN_PROGRESS}
  case 'LOGOUT_SUCCESS':
    localStorage.setItem(SCIO_LOCALSTORAGE_ID, 'LOGGED_OUT')
    return {...store, state: LOGGED_OUT}
  case 'REGISTER_SUCCESS':
    return {...store, state: REGISTER_SUCCESS}
  case 'REGISTER_REQUEST':
    return {...store, state: REGISTRATION_IN_PROGRESS}
  case 'SESSION_ERROR':
    localStorage.setItem(SCIO_LOCALSTORAGE_ID, 'LOGGED_OUT')
    return {...store, state: INVALID, sessionError: action.payload}
  case 'SET_SESSION_STATE':
    return {...store, state: action.payload}
  default:
    return {...store }
  }
}

export default reducer