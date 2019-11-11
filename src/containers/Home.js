import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Home.css'

import { login, logout, register } from '../actions/SessionActions'
import { addBookmark, deleteBookmark, getBookmarks, updateBookmark } from '../actions/BookmarksActions'
import { getTags, getTagsObject, getTimeStamps } from '../reducers/BookmarksReducer'
import App from './App'
import Login from '../components/Login'

class Home extends Component {
  componentDidMount = () => {
    if (this.props.sessionState === 'LOGGED_IN' && !this.props.bookmarks) {
      this.props.getBookmarks();
    }
  }

  handleLogin = (email, password) => {
    this.props.handleLogin(email, password)
  }

  handleRegister = (email, username, password) => {
    this.props.handleRegister(email, username, password)
  }

  render() {
    return (
      <div className="home">
        { this.props.sessionState !== 'LOGGED_IN' &&
          <Login
            login={this.handleLogin}
            register={this.handleRegister}
          />
        }
        { this.props.sessionState === 'LOGGED_IN' &&
          <App
            addBookmark={this.props.addBookmark}
            deleteBookmark={this.props.deleteBookmark}
            newBookmarkState={this.props.newBookmarkState}
            updateBookmark={this.props.updateBookmark}
            bookmarks={this.props.bookmarks}
            logout={this.props.handleLogout}
            tags={this.props.tags}
            tagsObject={this.props.tagsObject}
            timeStamps={this.props.timeStamps}
          />
        }
      </div>
    )
  }
}

Home.propTypes = {
  addBookmark: PropTypes.func,
  deleteBookmark: PropTypes.func,
  newBookmarkState: PropTypes.string,
  bookmarks: PropTypes.array,
  getBookmarks: PropTypes.func,
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
  handleRegister: PropTypes.func,
  sessionState: PropTypes.string,
  tags: PropTypes.array,
  tagsObject: PropTypes.object,
  timeStamps: PropTypes.array,
  updateBookmark: PropTypes.func,
}

Home.defaultProps = {
  addBookmark: undefined,
  deleteBookmark: undefined,
  newBookmarkState: 'UNKNOWN',
  bookmarks: null,
  getBookmarks: undefined,
  handleLogin: undefined,
  handleLogout: undefined,
  handleRegister: undefined,
  sessionState: 'UNKNOWN',
  tags: undefined,
  tagsObject: undefined,
  timeStamps: undefined,
  updateBookmark: undefined,
}

const mapDispatchToProps = (dispatch) => ({
  addBookmark: (bookmark) => {
    dispatch(addBookmark(bookmark))
  },
  deleteBookmark: (id) => {
    dispatch(deleteBookmark(id))
  },
  getBookmarks: () => {
    dispatch(getBookmarks())
  },
  handleLogin: (email, password) => {
    dispatch(login(email, password))
  },
  handleLogout: () => {
    dispatch(logout())
  },
  handleRegister: (email, username, password) => {
    dispatch(register(email, username, password))
  },
  updateBookmark: (bookmark) => {
    dispatch(updateBookmark(bookmark))
  },
})

const mapStateToProps = (state) => ({
  bookmarks: state.Bookmarks.bookmarks,
  newBookmarkState: state.Bookmarks.newBookmarkState,
  sessionState: state.Session.state,
  tags: getTags(state),
  tagsObject: getTagsObject(state),
  timeStamps: getTimeStamps(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
