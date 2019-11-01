import { API_URL } from '../config'
import {
  CREATE_BOOKMARK_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  CREATE_BOOKMARK_ERROR,
  GET_BOOKMARKS_ERROR,
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  UPDATE_BOOKMARK_ERROR,
  UPDATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_SUCCESS,
} from './types'

export const createBookmarkRequest = () => ({
  type: CREATE_BOOKMARK_REQUEST,
})

export const createBookmarkSuccess = () => ({
  type: CREATE_BOOKMARK_SUCCESS,
})

export const createBookmarkError = () => ({
  type: CREATE_BOOKMARK_ERROR,
})

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

export const updateBookmarkRequest = () => ({
  type: UPDATE_BOOKMARK_REQUEST,
})

export const updateBookmarkSuccess = () => ({
  type: UPDATE_BOOKMARK_SUCCESS,
})

export const updateBookmarkError = () => ({
  type: UPDATE_BOOKMARK_ERROR,
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
      tags: bookmark.tags || [],
    }
    return fetch(`${API_URL}/shortcuts`, {
      body: JSON.stringify(data),
      'cache-control': 'no-cache',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
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

export const updateBookmark = (bookmark) => {
  return (dispatch) => {
    dispatch(updateBookmarkRequest())
    const data = {
      description: bookmark.description,
      title: bookmark.title,
      url: bookmark.url,
      tags: bookmark.tags || [],
    }
    return fetch(`${API_URL}/shortcuts/${bookmark.id}`, {
      body: JSON.stringify(data),
      'cache-control': 'no-cache',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      method: 'PUT',
    })
      .then(() => {
        return dispatch(updateBookmarkSuccess())
      })
      .then(() => {
        return dispatch(getBookmarks())
      })
      .catch((error) => {
        console.log(error)
        dispatch(updateBookmarkError(error))
      })
  }
}
