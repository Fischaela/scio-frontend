import React from 'react';
import { Button, Input, Tabs, Typography } from 'antd';
import './App.css';

const { TabPane } = Tabs;
const { Text, Title } = Typography;

function App() {
  return (
    <div className="app">
      <section className="main">
        <Title>Welcome to Shortcut.io</Title>
        <Text>Where your bookmarks life.</Text>
        <Tabs className="tabs" defaultActiveKey="1">
          <TabPane className="tab" tab="Login" key="1">
            <Input addonBefore="Email adress" className="input" placeholder="Email address" />
            <br /><br />
            <Input.Password addonBefore="Password" className="input" placeholder="Password" />
            <br /><br />
            <Button type="primary">Login</Button>
          </TabPane>
          <TabPane className="tab" tab="Sign up" key="2">
            <Input addonBefore="Email adress" className="input" placeholder="Email address" />
            <br /><br />
            <Input.Password addonBefore="Password" className="input" placeholder="Password" />
            <br /><br />
            <Input.Password addonBefore="Repeat password" className="input" placeholder="Password" />
            <br /><br />
            <Button type="primary">Sign up</Button>
          </TabPane>
        </Tabs>
      </section>
      <section className="aside"></section>
    </div>
  );
}

export default App;
