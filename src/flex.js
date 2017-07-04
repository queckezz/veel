import { oneOf, bool, number } from 'prop-types'
import React from 'react'
import Box from './box'

const Flex = ({
  justify,
  column,
  center,
  order,
  align,
  wrap,
  ...props
}) => (
  <Box
    {...props}
    css={Object.assign(
      {},
      {
        display: 'flex',
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : null,
        flexDirection: column ? 'column' : null,
        order
      },
      center
        ? {
          alignItems: 'center',
          justifyContent: 'center'
        }
        : {},
      props.css
    )}
  />
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
