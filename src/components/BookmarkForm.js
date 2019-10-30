import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';

import './BookmarkForm.css';

class BookmarkForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
    }
  }

  render() {
    return (
      <Form layout="vertical">
        <Form.Item label="URL">
          <Input
            onChange={(e) => this.props.handleChange(e, 'newBookmarkUrl')}
            value={this.props.bookmark.url || ''}
          />
        </Form.Item>
        <Form.Item label="Title">
          <Input
            onChange={(e) => this.props.handleChange(e, 'newBookmarkTitle')}
            value={this.props.bookmark.title || ''}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input
            onChange={(e) => this.props.handleChange(e, 'newBookmarkDescription')}
            value={this.props.bookmark.description || ''}
          />
        </Form.Item>
        <Form.Item label="Tags">
          <Select
            mode="tags"
            placeholder="Select tags"
            value={this.props.selectedItems}
            onChange={this.props.handleTagChange}
            style={{ width: '100%' }}
          >
            {this.props.filteredOptions.map(item => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    );
  }
}

export default BookmarkForm;
