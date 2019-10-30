import { combineReducers } from 'redux'

import Bookmarks from './reducers/BookmarksReducer'
import Session from './reducers/SessionReducer'

const scioApp = combineReducers({
  Bookmarks,
  Session,
})

export default scioApp