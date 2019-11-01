import { API_URL } from '../config'
import { getBookmarks } from './BookmarksActions'
import {
  INITIALISE_SESSION,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  SESSION_ERROR,
  SET_SESSION_STATE,
} from './types'

import {
  SCIO_LOCALSTORAGE_ID,
} from '../config'

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

export const logout = () => ({
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
    })
      .then(() => (
        dispatch(getBookmarks())
      ))
      .then(() => {
        localStorage.setItem(SCIO_LOCALSTORAGE_ID, 'LOGGED_IN')
        return dispatch(loginSuccess())
      })
      .catch((error) => (
        dispatch(sessionError(error))
      ))
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
    return fetch(`${API_URL}/users`, {
      body: JSON.stringify(data),
      'cache-control': 'no-cache',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    })
      .then((response) => (
        response.json()
      ))
      .then((json) => (
        dispatch(registerSuccess(json))
      ))
      .catch((error) => (
        dispatch(sessionError(error))
      ))
  }
}
