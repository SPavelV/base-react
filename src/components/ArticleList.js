import React from 'react'
import Article from './Article'
import CommentsList from "./CommentsList";


export default function ArticleList({articles, comments}) {
  const articleElements = articles.map((article) =>
    <li key={article.id}>
      <Article article={article} />
      <CommentsList comments={comments}/>
    </li>);
  return (
    <ul>
      {articleElements}
    </ul>
  )
}