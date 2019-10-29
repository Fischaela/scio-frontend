import { API_URL } from '../config'
import {
  INITIALISE_SESSION,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  SESSION_ERROR,
  SET_SESSION_STATE,
} from './types'

export const initialiseSession = (wasRedirected = false) => ({
  payload: wasRedirected,
  type: INITIALISE_SESSION,
})

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
})

export const loginSuccess = (json) => ({
  payload: json,
  type: LOGIN_SUCCESS,
})

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
})

export const logoutSuccess = (json) => ({
  payload: json,
  type: LOGOUT_SUCCESS,
})

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
})

export const registerSuccess = (json) => ({
  payload: json,
  type: REGISTER_SUCCESS,
})

export const sessionError = (error) => ({
  payload: error,
  type: SESSION_ERROR,
})

export const setSessionState = (newState) => ({
  payload: newState,
  type: SET_SESSION_STATE,
})


/**
 * ASYNC ACTIONS
 */

export const login = (emailAddress, password) => {
  console.log('!')
  return (dispatch) => {
    dispatch(loginRequest())
    const data = {
      email: emailAddress,
      password: password,
    }
    return fetch(`${API_URL}/sessions`, {
      body: JSON.stringify(data),
      'cache-control': 'no-cache',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'no-cors',
    })
      .then((json) => {
        return dispatch(loginSuccess(json))
      })
      .catch((error) => {
        dispatch(sessionError(error))
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutRequest())
    return fetch(`${API_URL}`, {
      'cache-control': 'no-cache',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      method: 'DELETE',
      mode: 'no-cors',
    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        return dispatch(logoutSuccess(json))
      })
      .catch((error) => {
        dispatch(sessionError(error))
      })
  }
}

export const register = (emailAddress, username, password) => {
  return (dispatch) => {
    dispatch(registerRequest())
    const data = {
      email: emailAddress,
      password: password,
      username: username,
    }
    console.log(JSON.stringify(data), emailAddress, username, password)
    return fetch(`${API_URL}/users`, {
      body: JSON.stringify(data),
      'cache-control': 'no-cache',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'no-cors',
    })
      .then(response => {
        return response.json()
      })
      .then(json => dispatch(registerSuccess(json)))
      .catch((error) => {
        dispatch(sessionError(error))
      })
  }
}
