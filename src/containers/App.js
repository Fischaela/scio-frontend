import React, { Component } from 'react';

import { Button, Layout, Modal } from 'antd';

import './App.css';
import BookmarkCard from '../components/BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
          title="Add new bookmark"
          visible={this.state.modalVisible}
        >
          <BookmarkForm
            filteredOptions={filteredOptions}
            handleTagChange={this.handleTagChange}
            selectedItems={this.state.selectedItems}
          />
        </Modal>
        <Header className="header">
          <Button type="primary" onClick={this.showModal}>New Bookmark</Button>
          <Button type="primary" onClick={this.props.logout}>Logout</Button>
        </Header>
        <Content>
          { this.props.bookmarks &&
            <section className="cards">
              { this.props.bookmarks.map((card) =>
                <BookmarkCard data={card} key={card.id} />
              )}
            </section>
          }
        </Content>
        <Footer className="footer">Shortcut.io © 2019 Created by | <a href="/imprint">Imprint</a></Footer>
      </Layout>
    );
  }
}

export default App;
