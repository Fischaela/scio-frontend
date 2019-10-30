import { API_URL } from '../config'
import {
  GET_BOOKMARKS_ERROR,
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
} from './types'

export const getBookmarksRequest = () => ({
  type: GET_BOOKMARKS_REQUEST,
})

export const getBookmarksSuccess = (json) => ({
  payload: json,
  type: GET_BOOKMARKS_SUCCESS,
})

export const getBookmarksError = () => ({
  type: GET_BOOKMARKS_ERROR,
})


/**
 * ASYNC ACTIONS
 */

export const getBookmarks = () => {
  return (dispatch) => {
    dispatch(getBookmarksRequest())
    return fetch(`${API_URL}/shortcuts`, {
      'cache-control': 'no-cache',
      credentials: 'include',
      method: 'GET',
    })
      .then(response => {
        return response.json()
      })
      .then((json) => {
        console.log(json)
        return dispatch(getBookmarksSuccess(json))
      })
      .catch((error) => {
        console.log(error)
        dispatch(getBookmarksError(error))
      })
  }
}
