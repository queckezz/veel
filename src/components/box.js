import { space, width, color } from 'styled-system'
import PropTypes from 'prop-types'
import styled from '../styled'

const Box = styled('div')(
  space,
  width,
  color
)

Box.displayName = 'Box'

const responsive = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  width: responsive,
  w: responsive,
  /** Margin */
  m: responsive,
  mt: responsive,
  mr: responsive,
  mb: responsive,
  ml: responsive,
  mx: responsive,
  my: responsive,
  /** Padding */
  p: responsive,
  pt: responsive,
  pr: responsive,
  pb: responsive,
  pl: responsive,
  px: responsive,
  py: responsive
}

export default Box
