import React, { Component } from 'react';

import './Home.css';

import App from './App'
import Login from '../components/Login'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  }

  toggleLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    })
  }

  render() {
    return (
      <div className="home">
        { !this.state.isLoggedIn &&
          <Login login={() => this.toggleLogin()} />
        }
        { this.state.isLoggedIn &&
          <App logout={() => this.toggleLogin()} />
        }
      </div>
    );
  }
}

export default Home;
