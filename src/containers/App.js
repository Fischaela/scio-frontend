import React, { Component } from 'react'
import Masonry from 'react-masonry-css'

import { Button, Icon, Layout, Modal, Menu } from 'antd'

import './App.css'
import BookmarkCard from '../components/BookmarkCard'
import BookmarkForm from '../components/BookmarkForm'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu;
const breakpointColumnsObj = {
  default: 7,
  1600: 6,
  1400: 5,
  1200: 4,
  1000: 3,
  800: 2,
  450: 1
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmLoading: false,
      filteredByTags: null,
      inEditMode: false,
      modalVisible: false,
      modalTitle: '',
      selectedItems: [],
      selectedTags: [],
      newBookmarkDescription: '',
      newBookmarkId: '',
      newBookmarkTitle: '',
      newBookmarkUrl: '',
      siderHidden: true,
      visibleBookmarks: [],
    }
  }

  componentDidMount = () => {
    if (
      this.props.bookmarks &&
      this.props.bookmarks.length &&
      this.props.bookmarks.length > 0
    ) {
      this.setState({
        visibleBookmarks: this.props.bookmarks,
      })
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.bookmarks !== this.props.bookmarks) {
      this.setState({
        visibleBookmarks: this.props.bookmarks,
      })
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
  
  handleCardDelete = (e, bookmark) => {
    e.preventDefault()
    e.stopPropagation()
    this.props.deleteBookmark(bookmark.id)
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

  handleResetTagFilter = () => {
    this.setState({
      filteredByTags: null,
      visibleBookmarks: this.props.bookmarks,
    })
  }

  handleTagClick = (e, clickedTag) => {
    console.log(this.state.filteredByTags)
    if (
      this.state.visibleBookmarks &&
      this.state.visibleBookmarks.length &&
      this.state.visibleBookmarks.length > 0
    ) {
      const newVisibleBookmarks = []
      for (const bookmark of this.props.bookmarks) {
        for (const tag of bookmark.tags) {
          if (tag === clickedTag) {
            newVisibleBookmarks.push(bookmark)
          }
        }
      }
      this.setState({
        filteredByTags: clickedTag,
        visibleBookmarks: newVisibleBookmarks,
      })
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

  toggleSider = () => {
    this.setState({
      siderHidden: !this.state.siderHidden,
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
        <Sider className={this.state.siderHidden ? 'sider sider--hidden' : 'sider'}>
          <Button className="sider__toggle" type="link" onClick={this.toggleSider}>
            { this.state.siderHidden &&
              <Icon type="menu-unfold" />
            }
            { !this.state.siderHidden &&
              <Icon type="menu-fold" />
            }
          </Button>
          <div className="sider__item">
            <Button
              type="primary"
              onClick={() => this.showModal('Add new bookmark')}
              className="sider__button"
            >New Bookmark</Button>
          </div>
          <div className="sider__item">
            <p className="sider__title">Tags</p>
            <ul className="sider__list">
              { Object.keys(this.props.tagsObject).map((key) => (
                <li
                  key={this.props.tagsObject[key].name}
                  className={this.state.filteredByTags === this.props.tagsObject[key].name ? 'sider__list__item sider__list__item--active' : 'sider__list__item'}
                  onClick={(e) => this.handleTagClick(e, this.props.tagsObject[key].name)}
                >
                  {this.props.tagsObject[key].name}
                  <span className="sider__list__item__counter">{this.props.tagsObject[key].count}</span>
                </li>
              ))}
            </ul>
            { this.state.filteredByTags &&
              <Button
                className="sider__list__button"
                type="link"
                icon="close-circle"
                onClick={this.handleResetTagFilter}
              >
                Show all items
              </Button>
            }
          </div>
        </Sider>
        <Layout className="main">
          <Content className="app__content">
            { (this.state.visibleBookmarks && this.state.visibleBookmarks.length && this.state.visibleBookmarks.length > 0) &&
              <section>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="cards"
                  columnClassName="cards__card"
                >
                  { this.state.visibleBookmarks.map((card) =>
                    <BookmarkCard
                      data={card}
                      delete={this.handleCardDelete}
                      edit={this.handleCardEdit}
                      handleClick={this.handleBookmarkClick}
                      key={card.id}
                    />
                  )}
                </Masonry>
                { (this.props.timeStamps && this.props.timeStamps.length && this.props.timeStamps.length > 0) &&
                  <section className="timeline">
                    <ul className="timeline__list">
                      { this.props.timeStamps.map((timestamp) => 
                        <li className={`timeline__list__item timeline__list__item--${timestamp.bookmarks.length}`} key={timestamp.index}></li>
                      )}
                    </ul>
                  </section>
                }
              </section>
            }
          </Content>
          <Footer className="footer">Shortcut.io © 2019 | <Button type="link" onClick={this.props.logout}>Logout</Button></Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
