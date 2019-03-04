import React, { Component } from 'react';
import PostList from './component/PostList';
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <PostList />
      </div>
    );
  }
}

export default App;

