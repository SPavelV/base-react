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

  componentWillReceiveProps(nextProps) {
    console.log('---', this.props.isOpen, nextProps.isOpen);
  }

  componentWillMount() {
    console.log('---', 'mounting');
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
         {isOpen ? 'close' : 'open'}
         </button>
        {this.getBody()}
      </div>
    )
  }

  setContainerRef = ref => {
    this.container = ref;
    console.log('---', ref);
  };

  componentDidMount() {
    console.log('---', 'mounted');
  }

  getBody() {
    const {article,isOpen} = this.props;
    if(!isOpen) return null;
    return <section>{article.text}</section>
  }

}

export default Article;

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