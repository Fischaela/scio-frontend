import {
  CREATE_BOOKMARK_ERROR,
  CREATE_BOOKMARK_IN_PROGRESS,
  CREATE_BOOKMARK_SUCCESS,
  GETTING_BOOKMARKS_ERROR,
  GETTING_BOOKMARKS_IN_PROGRESS,
  GETTING_BOOKMARKS_SUCCESS,
  UPDATE_BOOKMARK_ERROR,
  UPDATE_BOOKMARK_IN_PROGRESS,
  UPDATE_BOOKMARK_SUCCESS,
} from './types'

const defaultStore = {
  bookmarks: null,
  bookmarksState: 'UNDEFINED',
  newBookmarkState: 'UNDEFINED',
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
  case 'CREATE_BOOKMARK_REQUEST':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_IN_PROGRESS }
  case 'CREATE_BOOKMARK_SUCCESS':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_SUCCESS }
  case 'CREATE_BOOKMARK_ERROR':
    return { ...store, newBookmarkState: CREATE_BOOKMARK_ERROR }
  case 'GET_BOOKMARKS_REQUEST':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_IN_PROGRESS }
  case 'GET_BOOKMARKS_SUCCESS':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_SUCCESS, bookmarks: action.payload }
  case 'GET_BOOKMARKS_ERROR':
    return { ...store, bookmarksState: GETTING_BOOKMARKS_ERROR }
  case 'UPDATE_BOOKMARK_REQUEST':
    return { ...store, newBookmarkState: UPDATE_BOOKMARK_IN_PROGRESS }
  case 'UPDATE_BOOKMARK_SUCCESS':
    return { ...store, newBookmarkState: UPDATE_BOOKMARK_SUCCESS }
  case 'UPDATE_BOOKMARK_ERROR':
    return { ...store, newBookmarkState: UPDATE_BOOKMARK_ERROR }
  default:
    return { ...store }
  }
}

// Selector functions
export const getTags = (state) => {
  let tags = []
  if (state.Bookmarks && state.Bookmarks.bookmarks && state.Bookmarks.bookmarks.length) {
    for (const bookmark of state.Bookmarks.bookmarks) {
      for (const tag of bookmark.tags) {
        tags.push(tag)
      }
    }
    tags = [...new Set(tags)]
  }
  return(tags)
}

export const getTagsObject = (state) => {
  let tagsArray = []
  let tags = {}
  if (state.Bookmarks && state.Bookmarks.bookmarks && state.Bookmarks.bookmarks.length) {
    for (const bookmark of state.Bookmarks.bookmarks) {
      for (const bookmarkTag of bookmark.tags) {
        tagsArray.push(bookmarkTag)
      }
    }
    for (const tag of tagsArray) {
      if (tags[tag]) {
        tags[tag].count +=1
      } else {
        tags[tag] = {}
        tags[tag].count = 1
        tags[tag].name = tag
      }
    }
  }
  return(tags)
}

export default reducer