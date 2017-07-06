import context from './context'
import isFunction from '@f/is-function'
import React from 'react'

import {
  removeProps,
  fontSize,
  space,
  width,
  color
} from 'styled-system'

import { combineRules } from 'fela'

const styled = (Component = 'div', createComponent) => {
  if (isFunction(Component)) {
    createComponent = Component
    Component = 'div'
  }

  const VeelComponent = ({ css, ...props }, ctx) => {
    const { renderer, theme } = ctx[context.ns]

    const style = createComponent
      ? createComponent(theme, props)
      : { props }

    const cn = renderer.renderRule(
      combineRules(fontSize, space, width, color, () => ({
        ...style.css,
        ...css
      })),
      props
    )

    return (
      <Component
        className={cn}
        {...removeProps(style.props)}
      />
    )
  }

  VeelComponent.contextTypes = context.types
  return VeelComponent
}

export default styled
