import { createElement as h } from 'react'
import { combineRules } from 'fela'
import PropTypes from 'prop-types'
import context from './context'

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

    return h(is || BaseComponent, {
      className,
      ...Object.keys(props)
        .filter(
          key => typeof BaseComponent == 'function'
            ? !stylePropKeys.includes(key)
            : true
        )
        .reduce((obj, key) => ({ ...obj, [key]: props[key] }), {})
    })
  }

  Component.contextTypes = context.types

  return Component
}

export default styled
