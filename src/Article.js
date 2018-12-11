import React, {Component} from 'react'
import PropTypes from 'prop-types'
export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  render() {
    const {article} = this.props;
    const {isOpen} = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
         {isOpen ? 'close' : 'open'}
         </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    if(!this.state.isOpen) return null;
    const {article} = this.props;
    return <section>{article.text}</section>
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

// export default function Article(props) {
//   console.log(props);
//
//   const{article} = props;
//   return(
//     <div>
//       <h3>{article.title}</h3>
//       <section>{article.text}</section>
//     </div>
//   )
// }