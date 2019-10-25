import React, { Component } from 'react';
import { Card, Tag, Typography } from 'antd';

import './BookmarkCard.css';

const { Paragraph } = Typography;

class BookmarkCard extends Component {

  render() {
    return (
      <Card
        className="card"
        hoverable
        cover={<img alt="example" src={this.props.data.image} />}
      >
        <p className="card__title">{this.props.data.title}</p>
        <Paragraph copyable className="card__url">{this.props.data.url}</Paragraph>
        { this.props.data.tags.map((tag) =>
          <Tag color={tag.color} key={tag.id}>{tag.label}</Tag>
        )}
      </Card>
    );
  }
}

export default BookmarkCard;
