import {
  CREATE_BOOKMARK_ERROR,
  CREATE_BOOKMARK_IN_PROGRESS,
  CREATE_BOOKMARK_SUCCESS,
  GETTING_BOOKMARKS_ERROR,
  GETTING_BOOKMARKS_IN_PROGRESS,
  GETTING_BOOKMARKS_SUCCESS,
} from './types'

const defaultStore = {
  bookmarks: null,
  bookmarksState: undefined,
  newBookmarkState: undefined,
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
  case 'GET_BOOKMARKS_REQUEST':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_IN_PROGRESS }
  case 'GET_BOOKMARKS_SUCCESS':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_SUCCESS, bookmarks: action.payload }
  case 'GET_BOOKMARKS_ERROR':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_ERROR }
  case 'CREATE_BOOKMARK_REQUEST':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_IN_PROGRESS }
  case 'CREATE_BOOKMARK_SUCCESS':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_SUCCESS }
  case 'CREATE_BOOKMARK_ERROR':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_ERROR }
  default:
    return { ...store }
  }
}

export default reducer