import React, {Component} from 'react'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toogleOpen'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
         {isOpen ? 'close' : 'open'}
         </button>
        {this.getBody()}
      </div>
    )
  }

  getBody() {
    const {article,isOpen} = this.props;
    if(!isOpen) return null;
    return <section>{article.text}</section>
  }

}

export default toggleOpen(Article);

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