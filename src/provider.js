import context from './context'
import { Component, Children } from 'react'

class StyleProvider extends Component {
  getChildContext() {
    return {
      [context.ns]: this.props
    }
  }

  render() {
    const children = Children.only(this.props.children)
    return children
  }
}

StyleProvider.childContextTypes = context.types

export default StyleProvider
