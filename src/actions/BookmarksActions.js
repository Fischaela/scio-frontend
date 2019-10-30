import { API_URL } from '../config'
import {
  GET_BOOKMARKS_ERROR,
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  CREATE_BOOKMARK_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  CREATE_BOOKMARK_ERROR,
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

export const createBookmarkRequest = () => ({
  type: CREATE_BOOKMARK_REQUEST,
})

export const createBookmarkSuccess = () => ({
  type: CREATE_BOOKMARK_SUCCESS,
})

export const createBookmarkError = () => ({
  type: CREATE_BOOKMARK_ERROR,
})

/**
 * ASYNC ACTIONS
 */

export const addBookmark = (bookmark) => {
  return (dispatch) => {
    dispatch(createBookmarkRequest())
    const data = {
      description: bookmark.description,
      title: bookmark.title,
      url: bookmark.url,
      tags: ['tag'],
    }
    return fetch(`${API_URL}/shortcuts`, {
      body: JSON.stringify(data),
      'cache-control': 'no-cache',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'no-cors',
    })
      .then(() => {
        return dispatch(createBookmarkSuccess())
      })
      .then(() => {
        return dispatch(getBookmarks())
      })
      .catch((error) => {
        console.log(error)
        dispatch(createBookmarkError(error))
      })
  }
}

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
