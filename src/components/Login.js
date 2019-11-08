import React, { Component } from 'react';
import { Button, Icon, Input, Form, Typography } from 'antd';
import './Login.css';

const { Text, Title } = Typography;

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordCheck: '',
      showRegister: false,
      username: '',
    }
  }

  handleChange = (event, type) => {
    this.setState({
      [type]: event.target.value,
    })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()
    this.props.login(this.state.email, this.state.password)
  }

  handleSubmitRegister = (event) => {
    event.preventDefault()
    this.props.register(this.state.email, this.state.username, this.state.password)
  }

  handleToggleRegister = () => {
    this.setState({
      showRegister: !this.state.showRegister,
    })
  }

  render() {
    return (
      <div className="login">
        <section className="login__main">
          <Title className="login__title" level={1}>Welcome to Shortcut.io</Title>
          <Form className="login__form">
            <Form.Item>
              <Input
                className="input"
                onChange={(e) => this.handleChange(e, 'email')}
                placeholder="Email address"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                value={this.state.email || ''}
              />
            </Form.Item>
            { this.state.showRegister &&
              <Form.Item>
                <Input
                  className="input"
                  onChange={(e) => this.handleChange(e, 'username')}
                  placeholder="User name"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  value={this.state.username || ''}
                />
              </Form.Item>
            }
            <Form.Item>
              <Input.Password
                className="input"
                onChange={(e) => this.handleChange(e, 'password')}
                placeholder="Password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                value={this.state.password || ''}
              />
            </Form.Item>
            <Form.Item>
              { !this.state.showRegister &&
                <div>
                  <Button
                    onClick={this.handleSubmitLogin}
                    className="login__form__button"
                    type="primary"
                    value="submit"
                  >Sign in</Button>
                  Or <a onClick={this.handleToggleRegister}>sign up now!</a>
                </div>
              }
              { this.state.showRegister &&
                <div>
                  <Button
                    onClick={this.handleSubmitRegister}
                    className="login__form__button"
                    type="primary"
                    value="submit"
                  >Sign up</Button>
                  Or <a onClick={this.handleToggleRegister}>sign in now!</a>
                </div>
              }
            </Form.Item>
          </Form>
          <Text className="login__main__footer">Shortcut.io © 2019 | <Button type="link">Imprint</Button></Text>
        </section>
        <section className="login__aside"></section>
      </div>
    );
  }
}

export default Login;
