import React, { Component } from 'react';
import { Card, Tag, Typography } from 'antd';

import './BookmarkCard.css';

const { Paragraph } = Typography;

class BookmarkCard extends Component {

  render() {
    const screenshotUrl = `
      https://assets.shortcut.io/${this.props.data.screenshot_id.substring(0, 4)}/${this.props.data.screenshot_id.substring(4, 8)}/${this.props.data.screenshot_id}_500.jpg
    `

    return (
      <Card
        onClick={(e) => this.props.handleClick(e, this.props.data)}
        className="card"
        hoverable
        cover={<div alt="example" className="card__cover" style={screenshotUrl ? {backgroundImage: `url(${screenshotUrl})`} : {backgroundImage: 'none'}}></div>}
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
