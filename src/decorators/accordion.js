import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
  state = {
    openId: null
  };

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenAccordion={this.toggleOpenAccordion}/>
  }

  toggleOpenAccordion(openId) {
    this.setState({ openId })
  }
}