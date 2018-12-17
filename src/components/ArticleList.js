import React, {Component} from 'react'
import Article from './Article'
import CommentsList from './CommentsList'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  // state = {
  //   openArticleId: null
  // };

  render() {
    const {openId, toggleOpenAccordion} = this.props;
    const articleElements = this.props.articles.map(article =>
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openId}
          toggleOpen = {toggleOpenAccordion(article.id)}
        />
        <CommentsList comments={this.props.comments}/>
      </li>);
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

  // toggleOpenArticle(openArticleId) {
  //   this.setState({ openArticleId })
  // }

}

export default accordion(ArticleList);