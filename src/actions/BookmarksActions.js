import { API_URL } from '../config'
import { sessionError } from './SessionActions'
import {
  CREATE_BOOKMARK_REQUEST,
  CREATE_BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  UPDATE_BOOKMARK_REQUEST,
  UPDATE_BOOKMARK_SUCCESS,
} from './types'
import { handleApiErrors } from '../helpers'

export const createBookmarkRequest = () => ({
  type: CREATE_BOOKMARK_REQUEST,
})

export const createBookmarkSuccess = () => ({
  type: CREATE_BOOKMARK_SUCCESS,
})

export const deleteBookmarkRequest = () => ({
  type: DELETE_BOOKMARK_REQUEST,
})

export const deleteBookmarkSuccess = () => ({
  type: DELETE_BOOKMARK_SUCCESS,
})

export const getBookmarksRequest = () => ({
  type: GET_BOOKMARKS_REQUEST,
})

export const getBookmarksSuccess = (json) => ({
  payload: json,
  type: GET_BOOKMARKS_SUCCESS,
})

export const updateBookmarkRequest = () => ({
  type: UPDATE_BOOKMARK_REQUEST,
})

export const updateBookmarkSuccess = () => ({
  type: UPDATE_BOOKMARK_SUCCESS,
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
      .then((response) => {
        handleApiErrors(response)
        return dispatch(createBookmarkSuccess())
      })
      .then(() => {
        return dispatch(getBookmarks())
      })
      .catch((error) => {
        dispatch(sessionError(error))
      })
  }
}

export const deleteBookmark = (bookmarkId) => {
  return (dispatch) => {
    dispatch(deleteBookmarkRequest())
    return fetch(`${API_URL}/shortcuts/${bookmarkId}`, {
      'cache-control': 'no-cache',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
      method: 'DELETE',
    })
      .then((response) => {
        handleApiErrors(response)
        return dispatch(deleteBookmarkSuccess())
      })
      .then(() => {
        return dispatch(getBookmarks())
      })
      .catch((error) => {
        dispatch(sessionError(error))
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
        handleApiErrors(response)
        return response.json()
      })
      .then((json) => {
        return dispatch(getBookmarksSuccess(json))
      })
      .catch((error) => {
        dispatch(sessionError(error))
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
      .then((response) => {
        handleApiErrors(response)
        return dispatch(updateBookmarkSuccess())
      })
      .then(() => {
        return dispatch(getBookmarks())
      })
      .catch((error) => {
        dispatch(sessionError(error))
      })
  }
}
