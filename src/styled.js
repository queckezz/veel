import { createElement as h } from 'react'
import { combineRules } from 'fela'
import PropTypes from 'prop-types'
import context from './context'

const keepKeys = (obj, keys) => {
  return Object.keys(obj)
    .filter(key => !keys.includes(key))
    .reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {})
}

const styled = (BaseComponent) => (...args) => {
  const Component = ({ is, ...props }, ctx) => {
    const { renderer, theme } = ctx[context.ns]
    const stylePropKeys = Object.keys(Component.propTypes || {})
    const styleProps = Object.assign({ theme }, props)

    const rules = args
      .map((a) => typeof a !== 'function' ? () => a : a)
      .filter(s => s !== null)

    const className = renderer.renderRule(
      combineRules(...rules),
      styleProps
    )

    return h(
      is || BaseComponent,
      Object.assign({}, keepKeys(props, stylePropKeys), {
        className: [props.className, className]
          .join(' ')
          .trim()
      })
    )
  }

  Component.contextTypes = context.types

  return Component
}

export default styled
