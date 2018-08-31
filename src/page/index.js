import React from 'react';
import { Link } from 'react-router-dom';
import { Button, DatePicker } from 'antd';
import './index.css';

export class IndexPage extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="link-list">
          <Link to="/Search">搜索页面</Link>
        </div>
        <Button type="primary">Click Me!</Button>
        <DatePicker/>
      </div>
    );
  }
}