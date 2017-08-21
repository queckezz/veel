import { responsiveStyle } from 'styled-system'
import PropTypes from 'prop-types'
import styled from '../styled'
import Box from './Box'

const direction = responsiveStyle('flex-direction', 'row', 'direction')
const justify = responsiveStyle('justify-content', 'justify')
const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
const align = responsiveStyle('align-items', 'align')

const Flex = styled(Box)(
  { display: 'flex', },
  direction,
  justify,
  align,
  wrap
)

const responsive = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Flex.propTypes = {
  justify: responsive,
  align: responsive,
  direction: responsive,
  wrap: responsive
}

export default Flex