import React, { Component } from 'react';
import { Button, Card, Icon, Tag, Typography } from 'antd';

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
        <Paragraph className="card__url">{this.props.data.url}</Paragraph>
        <section className="card__actions">
          <Button className="card__actions__delete" onClick={(e) => this.props.delete(e, this.props.data)} type="link">
            <Icon type="delete" />
          </Button>
          <Button className="card__actions__edit" onClick={(e) => this.props.edit(e, this.props.data)} type="link">
            <Icon type="edit" />
          </Button>
        </section>
      </Card>
    );
  }
}

export default BookmarkCard;
