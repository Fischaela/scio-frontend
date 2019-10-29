import { combineReducers } from 'redux'

import Session from './reducers/SessionReducer'

const scioApp = combineReducers({
  Session,
})

export default scioApp