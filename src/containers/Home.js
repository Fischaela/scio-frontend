import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Home.css'

import { login, logout, register } from '../actions/SessionActions'
import { addBookmark, getBookmarks } from '../actions/BookmarksActions'
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
            newBookmarkState={this.props.newBookmarkState}
            bookmarks={this.props.bookmarks}
            logout={this.props.handleLogout}
          />
        }
      </div>
    )
  }
}

Home.propTypes = {
  addBookmark: PropTypes.func,
  newBookmarkState: PropTypes.string,
  bookmarks: PropTypes.array,
  getBookmarks: PropTypes.func,
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
  handleRegister: PropTypes.func,
  sessionState: PropTypes.string,
}

Home.defaultProps = {
  addBookmark: undefined,
  newBookmarkState: 'UNKNOWN',
  bookmarks: null,
  getBookmarks: undefined,
  handleLogin: undefined,
  handleLogout: undefined,
  handleRegister: undefined,
  sessionState: 'UNKNOWN',
}

const mapDispatchToProps = (dispatch) => ({
  addBookmark: (bookmark) => {
    dispatch(addBookmark(bookmark))
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
})

const mapStateToProps = (state) => ({
  bookmarks: state.Bookmarks.bookmarks,
  newBookmarkState: state.Bookmarks.newBookmarkState,
  sessionState: state.Session.state,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
