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
      selectedItems: [],
      selectedTags: [],
      newBookmarkDescription: '',
      newBookmarkTitle: '',
      newBookmarkUrl: '',
    }
    this.handleNewBookmarkChange = this.handleNewBookmarkChange.bind(this)
  }

  handleBookmarkClick(e, bookmark) {
    window.open(bookmark.url, '_blank')
  }

  handleNewBookmarkChange(event, type) {
    this.setState({
      [type]: event.target.value,
    })
  }

  handleCancel = e => {
    this.setState({
      modalVisible: false,
    })
  }

  handleTagChange = selectedItems => {
    this.setState({ selectedItems })
  }

  handleOk = e => {
    e.preventDefault()
    this.setState({ confirmLoading: true })
    this.props.addBookmark({
      description: this.state.newBookmarkDescription,
      title: this.state.newBookmarkTitle,
      url: this.state.newBookmarkUrl,
      tags: this.state.selectedItems,
    })
    setTimeout(() => {
      this.setState({
        confirmLoading: false,
        modalVisible: false,
        newBookmarkDescription: '',
        newBookmarkTitle: '',
        newBookmarkUrl: '',
        selectedItems: [],
      });
    }, 500);
  }

  showModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  render() {
    const filteredOptions = this.props.tags.filter(o => !this.state.selectedTags.includes(o))

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
            handleChange={this.handleNewBookmarkChange}
            bookmark={{
              description: this.state.newBookmarkDescription,
              title: this.state.newBookmarkTitle,
              url: this.state.newBookmarkUrl,
              tags: this.state.selectedItems,
            }}
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
                <BookmarkCard handleClick={this.handleBookmarkClick} data={card} key={card.id} />
              )}
            </section>
          }
        </Content>
        <Footer className="footer">Shortcut.io © 2019 | <a href="/imprint">Imprint</a></Footer>
      </Layout>
    );
  }
}

export default App;
