import React, { Component } from 'react';
import { Card, Icon, Tag, Typography } from 'antd';

import './BookmarkCard.css';

const { Paragraph } = Typography;

class BookmarkCard extends Component {

  render() {
    return (
      <Card
        className="card"
        hoverable
        cover={<div alt="example" className="card__cover" style={this.props.data.screenshot_id ? {backgroundImage: `url(${this.props.data.screenshot_id})`} : {backgroundImage: 'none'}}></div>}
      >
        <p className="card__title">{this.props.data.title}</p>
        <p className="card__description">{this.props.data.description}</p>
        <Paragraph copyable className="card__url">{this.props.data.url}</Paragraph>
        { this.props.data.tags.map((tag) =>
          <Tag color={'magenta'} key={tag}>{tag}</Tag>
        )}
      </Card>
    );
  }
}

export default BookmarkCard;
