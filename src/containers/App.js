import React, { Component } from 'react'
import Masonry from 'react-masonry-css'

import { Button, Icon, Layout, Modal } from 'antd'

import './App.css'
import BookmarkCard from '../components/BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'

const { Header, Content, Footer } = Layout
const breakpointColumnsObj = {
  default: 7,
  1500: 6,
  1300: 5,
  1100: 4,
  900: 3,
  700: 2,
  500: 1
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmLoading: false,
      inEditMode: false,
      modalVisible: false,
      modalTitle: '',
      selectedItems: [],
      selectedTags: [],
      newBookmarkDescription: '',
      newBookmarkId: '',
      newBookmarkTitle: '',
      newBookmarkUrl: '',
    }
  }

  handleBookmarkClick = (e, bookmark) => {
    window.open(bookmark.url, '_blank')
  }

  handleNewBookmarkChange = (event, type) => {
    this.setState({
      [type]: event.target.value,
    })
  }

  handleCancel = e => {
    this.setState({
      inEditMode: false,
      modalVisible: false,
    })
  }

  handleCardEdit = (e, bookmark) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ inEditMode: true }, () => {
      this.showModal('Edit bookmark', bookmark)
    })
  }

  handleTagChange = selectedItems => {
    this.setState({ selectedItems })
  }

  handleOk = e => {
    e.preventDefault()
    this.setState({ confirmLoading: true })
    if (!this.state.inEditMode) {
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
        })
      }, 500)
    } else {
      this.props.updateBookmark({
        id: this.state.newBookmarkId,
        description: this.state.newBookmarkDescription,
        title: this.state.newBookmarkTitle,
        url: this.state.newBookmarkUrl,
        tags: this.state.selectedItems,
      })
      setTimeout(() => {
        this.setState({
          confirmLoading: false,
          inEditMode: false,
          modalVisible: false,
          newBookmarkDescription: '',
          newBookmarkTitle: '',
          newBookmarkUrl: '',
          selectedItems: [],
        })
      }, 500)
    }
  }

  showModal = (title, newBookmark) => {
    if (title) {
      this.setState({
        modalTitle: title,
      })
    }
    if (newBookmark) {
      this.setState({
        newBookmarkDescription: newBookmark.description,
        newBookmarkTitle: newBookmark.title,
        newBookmarkUrl: newBookmark.url,
        selectedItems: newBookmark.tags,
        newBookmarkId: newBookmark.id,
      })
    } else {
      this.setState({
        newBookmarkDescription: '',
        newBookmarkTitle: '',
        newBookmarkUrl: '',
        selectedItems: [],
      })
    }
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
          title={this.state.modalTitle}
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
          <Button type="primary" onClick={() => this.showModal('Add new bookmark')}>New Bookmark</Button>
          <Button type="primary" onClick={this.props.logout}>Logout</Button>
        </Header>
        <Content className="app__content">
          { this.props.bookmarks &&
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="cards"
              columnClassName="cards__card"
            >
              { this.props.bookmarks.map((card) =>
                <BookmarkCard
                  data={card}
                  edit={this.handleCardEdit}
                  handleClick={this.handleBookmarkClick}
                  key={card.id}
                />
              )}
            </Masonry>
          }
        </Content>
        <Footer className="footer">Shortcut.io © 2019 | <a href="/imprint">Imprint</a></Footer>
      </Layout>
    )
  }
}

export default App
