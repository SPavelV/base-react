import React, { Component } from 'react';
import ArticleList from './ArticleList'
import {articles,normalizedComments} from "./fixtures";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={articles} comments={normalizedComments}/>
      </div>
    );
  }
}

export default App;
