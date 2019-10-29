import React, { Component } from 'react';
import { Form, Input, Select } from 'antd';

import './BookmarkForm.css';

class BookmarkForm extends Component {

  render() {
    return (
      <Form layout="vertical">
        <Form.Item label="URL">
          <Input />
        </Form.Item>
        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <Input />
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
