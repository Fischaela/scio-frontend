import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Home.css'

import { login, logout, register } from '../actions/SessionActions'
import App from './App'
import Login from '../components/Login'

class Home extends Component {
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
            bookmarks={this.props.bookmarks}
            logout={this.props.handleLogout}
          />
        }
      </div>
    )
  }
}

Home.propTypes = {
  bookmarks: PropTypes.array,
  handleLogin: PropTypes.func,
  handleLogout: PropTypes.func,
  handleRegister: PropTypes.func,
  sessionState: PropTypes.string,
}

Home.defaultProps = {
  bookmarks: null,
  handleLogin: undefined,
  handleLogout: undefined,
  handleRegister: undefined,
  sessionState: 'UNKNOWN',
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, password) => {
    dispatch(login(email, password))
  },
  handleLogout: () => {
    // dispatch(logout())
  },
  handleRegister: (email, username, password) => {
    dispatch(register(email, username, password))
  },
})

const mapStateToProps = (state) => ({
  bookmarks: state.Bookmarks.bookmarks,
  sessionState: state.Session.state,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
