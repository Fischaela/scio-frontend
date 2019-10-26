import React, { Component } from 'react';
import { Button, Checkbox, Icon, Input, Form, Typography } from 'antd';
import './Login.css';

const { Text, Title } = Typography;

class Login extends Component {

  render() {
    return (
      <div className="login">
        <section className="login__main">
          <Title level={1}>Welcome to Shortcut.io</Title>
          <Form onSubmit={this.props.login} className="login__form">
            <Form.Item>
              <Input
                className="input"
                placeholder="Email address or user name"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                className="input" 
                placeholder="Password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login__form__forgot" href="">
                Forgot password
              </a>
              <Button className="login__form__button" type="primary" htmlType="submit">Login</Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
          <Text className="login__main__footer">Shortcut.io © 2019 Created by | <a href="#">Imprint</a></Text>
        </section>
        <section className="login__aside"></section>
      </div>
    );
  }
}

export default Login;
