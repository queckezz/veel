import React, { Component } from 'react'
import { render } from 'react-dom'
import inject from 'insert-css'

import {
  StyleProvider,
  createRenderer,
  Box
} from '../../src'

const renderer = createRenderer()

class Demo extends Component {
  render() {
    return (
      <StyleProvider renderer={renderer}>
        <Box
          mt={2}
          p={2}
          css={{
            background: 'yellow'
          }}
        >
          Hello world
        </Box>
      </StyleProvider>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
inject(renderer.renderToString())
