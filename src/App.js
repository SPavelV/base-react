import React, { Component } from 'react';
import ArticleList from './components/ArticleList'
import {articles,normalizedComments} from "./fixtures";
import ArticlesChart from './components/ArticlesChart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={articles} comments={normalizedComments}/>
        <ArticlesChart articles={articles}/>
      </div>
    );
  }
}

export default App;
