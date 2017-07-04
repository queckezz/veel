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

const wrap = (fn, props) =>
  isFunction(fn) ? fn(props) : props

const styled = _style => Component => {
  const VeelComponent = ({ css, ...props }, ctx) => {
    const { renderer, theme } = ctx[context.ns]

    const style = wrap(_style, props)

    const cn = renderer.renderRule(
      combineRules(
        fontSize,
        space,
        width,
        color,
        () => css || {}
      ),
      { style, ...props }
    )

    return (
      <Component className={cn} {...removeProps(props)} />
    )
  }

  VeelComponent.contextTypes = context.types
  return VeelComponent
}

export default styled
