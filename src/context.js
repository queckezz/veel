import { shape, object, array, number } from 'prop-types'

const ns = '__VEEL__'

const types = {
  [ns]: shape({
    renderer: object.isRequired,

    config: shape({
      space: array,
      fontSizes: array,
      breakpoints: array,
      colors: object
    })
  })
}

export default { types, ns }
