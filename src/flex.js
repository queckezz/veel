import { oneOf, bool, number } from 'prop-types'
import React from 'react'
import Box from './box'
import styled from './styled'

const Flex = styled(
  (
    theme,
    {
      justify,
      column,
      center,
      order,
      align,
      wrap,
      ...props
    }
  ) => ({
    props,
    css: {
      display: 'flex',
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : null,
      flexDirection: column ? 'column' : null,
      order,

      ...(center
        ? {
          alignItems: 'center',
          justifyContent: 'center'
        }
        : {})
    }
  })
)

Flex.PropTypes = {
  align: oneOf([
    'flex-start',
    'flex-end',
    'baseline',
    'center',
    'stretch'
  ]),

  justify: oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
  ]),

  order: number,
  column: bool,
  wrap: bool
}

export default Flex
