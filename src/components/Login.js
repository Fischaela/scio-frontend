import React, { Component } from 'react';
import { Button, Input, Tabs, Typography } from 'antd';
import './Login.css';

const { TabPane } = Tabs;
const { Text, Title } = Typography;

class Login extends Component {

  render() {
    return (
      <div className="login">
        <section className="login__main">
          <Title level={1}>Welcome to Shortcut.io</Title>
          <Tabs className="login__main__tabs" defaultActiveKey="1">
            <TabPane className="tab" tab="Login" key="1">
              <Input addonBefore="Email address" className="input" placeholder="Email address" />
              <br /><br />
              <Input.Password addonBefore="Password" className="input" placeholder="Password" />
              <br /><br />
              <Button type="primary" onClick={this.props.login}>Login</Button>
            </TabPane>
            <TabPane className="login__main__tab" tab="Sign up" key="2">
              <Input addonBefore="Email address" className="input" placeholder="Email address" />
              <br /><br />
              <Input.Password addonBefore="Password" className="input" placeholder="Password" />
              <br /><br />
              <Input.Password addonBefore="Repeat password" className="input" placeholder="Password" />
              <br /><br />
              <Button type="primary">Sign up</Button>
            </TabPane>
          </Tabs>
          <Text className="login__main__footer"><a href="#">Forgot password</a> | <a href="#">Imprint</a></Text>
        </section>
        <section className="login__aside"></section>
      </div>
    );
  }
}

export default Login;
