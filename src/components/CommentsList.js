import React,{Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toogleOpen'

class CommentsList extends Component{
  static defaultProps = {
    comments: []
  };

  render() {
    // const {isOpen, toggleOpen} = this.props;
    const text = this.props.isOpen ? 'Close comments' : 'Open comments';
    return (
      <div>
        <button onClick={this.props.toggleOpen}>
          {text}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {isOpen} = this.props;

    if(!isOpen) return null;
    const {comments} = this.props;

    if(!comments || !comments.length) return <p>No comments yet</p>;

    const commentElements = comments.map( (comment) =>
      <li key={comment.id}>
        <Comment comment={comment}/>
      </li>
    );

    return (
      <ul>
        {commentElements}
      </ul>
    )
  }

}

export default toggleOpen(CommentsList);