import React, { Component } from 'react'
import { render } from 'react-dom'
import inject from 'insert-css'

import {
  StyleProvider,
  createRenderer,
  Flex,
  Box
} from '../../src'

const renderer = createRenderer()

renderer.renderStatic(
  {
    margin: 0
  },
  'body, html'
)

renderer.renderStatic(
  {
    boxSizing: 'border-box'
  },
  '*'
)

const CenteredBox = props => (
  <Box
    p={2}
    w={[1, 0.5]}
    css={{ height: '50%' }}
    {...props}
  >
    Hello World
  </Box>
)

const App = () => (
  <Flex wrap center css={{ height: '100vh' }}>
    <CenteredBox bg='lightblue'>1</CenteredBox>
    <CenteredBox color='white' bg='blue'>2</CenteredBox>
  </Flex>
)

class Demo extends Component {
  render () {
    return (
      <StyleProvider renderer={renderer}>
        <App />
      </StyleProvider>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
inject(renderer.renderToString())
