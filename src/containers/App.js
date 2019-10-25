import React, { Component } from 'react';

import { Button, Layout } from 'antd';

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
      ]
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <Button type="primary" onClick={this.props.logout}>Logout</Button>
        </Header>
        <Content>
          <section className="cards">
            { this.state.cards.map((card) =>
              <BookmarkCard data={card} key={card.id} />
            )}
          </section>
        </Content>
        <Footer>Shortcut.io © 2019 Created by</Footer>
      </Layout>
    );
  }
}

export default App;
