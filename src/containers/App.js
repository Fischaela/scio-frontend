import React, { Component } from 'react';

import { Button, Form, Input, Layout, Modal, Select } from 'antd';

import './App.css';
import BookmarkCard from '../components/BookmarkCard'

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          id: 0,
          image: 'https://picsum.photos/400/300',
          tags: [
            {
              color: 'magenta',
              id: 0,
              label: 'Magenta',
            },
            {
              color: 'lime',
              id: 1,
              label: 'Lime',
            }
          ],
          title: 'Website Title',
          url: 'https://geildanke.com',
        },
        {
          id: 1,
          image: 'https://picsum.photos/400/300',
          tags: [
            {
              color: 'lime',
              id: 0,
              label: 'Lime',
            },
            {
              color: 'geekblue',
              id: 1,
              label: 'Geekblue',
            }
          ],
          title: 'Website Title',
          url: 'https://geildanke.com',
        },
      ],
      confirmLoading: false,
      modalVisible: false,
      selectedTags: [],
      tags: [
        'blue',
        'geekblue',
        'lime',
        'magenta',
      ],
    }
  }

  handleCancel = e => {
    console.log(e);
    this.setState({
      modalVisible: false,
    })
  }

  handleTagChange = selectedItems => {
    this.setState({ selectedItems });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        modalVisible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  render() {
    const filteredOptions = this.state.tags.filter(o => !this.state.selectedTags.includes(o))

    return (
      <Layout className="layout">
        <Modal
          title="Add new bookmark"
          visible={this.state.modalVisible}
          confirmLoading={this.state.confirmLoading}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <Form.Item label="URL">
              <Input />
            </Form.Item>
            <Form.Item label="Tags">
              <Select
                mode="tags"
                placeholder="Select tags"
                value={this.state.selectedItems}
                onChange={this.handleTagChange}
                style={{ width: '100%' }}
              >
                {filteredOptions.map(item => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Modal>
        <Header className="header">
          <Button type="primary" onClick={this.showModal}>New Bookmark</Button>
          <Button type="primary" onClick={this.props.logout}>Logout</Button>
        </Header>
        <Content>
          <section className="cards">
            { this.state.cards.map((card) =>
              <BookmarkCard data={card} key={card.id} />
            )}
          </section>
        </Content>
        <Footer className="footer">Shortcut.io © 2019 Created by | <a href="#">Imprint</a></Footer>
      </Layout>
    );
  }
}

export default App;
