import React from 'react';
import {Link } from 'react-router-dom';
import { Button } from 'antd';

class Search extends React.Component {
  render() {
    return (
      <div>
        <Button>Click Me!</Button>
        <Link to="/">click me to index</Link>
      </div>
    );
  }
}

export default Search

