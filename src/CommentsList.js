import React,{Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component{
  static defaultProps = {
    comments: []
  };

  state = {
    isOpen: false
  };

  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'Close comments' : 'Open comments'}
        </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if(!this.state.isOpen) return null;
    const {comments} = this.props;

    if(!comments || !comments.length) return <p>No comments yet</p>

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

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

}