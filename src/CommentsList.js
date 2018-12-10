import React,{Component} from 'react'
import Comment from './Comment'

export default class CommentsList extends Component{
  constructor(props) {
   super(props);
   this.state = {
     isOpen: false
   }
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'Close comments' : 'Open comments'}
        </button>
        {this.getList()}
      </div>
    )
  }

  getList() {
    if(!this.state.isOpen) return null;
    const {comments} = this.props;

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