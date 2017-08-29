
import styled, { StyleProvider, createRenderer } from '../src'
import { create as render } from 'react-test-renderer'
import PropTypes from 'prop-types'
import React from 'react'
import test from 'ava'

const defaultRenderer = createRenderer()

const Box = styled('div')(
  props => props.padding ? { padding: props.padding } : null
)

Box.propTypes = {
  padding: PropTypes.number
}

const Flex = styled(Box)(
  { display: 'flex' },
  props => props.align ? { alignItems: props.align } : null
)

Flex.propTypes = {
  align: PropTypes.string
}

test('empty component', (t) => {
  const Box = styled('div')()

  const el = render(
    <StyleProvider renderer={defaultRenderer}>
      <Box />
    </StyleProvider>
  ).toJSON()

  t.is(0, defaultRenderer.rules.length)
  t.is(el.type, 'div')
})

test('dynamic type', (t) => {
  const Box = styled('div')()

  const el = render(
    <StyleProvider renderer={defaultRenderer}>
      <Box is='span' />
    </StyleProvider>
  ).toJSON()

  t.is(el.type, 'span')
})

test('styled component', (t) => {
  const renderer = createRenderer()
  const Box = styled('h1')({
    margin: 15
  })

  const el = render(
    <StyleProvider renderer={renderer}>
      <Box />
    </StyleProvider>
  ).toJSON()

  t.true(renderer.rules.indexOf('margin:15') !== -1)
  t.is(el.type, 'h1')
})

test('removes props based on prop types', (t) => {
  const renderer = createRenderer()

  const el = render(
    <StyleProvider renderer={renderer}>
      <Flex align='center' unknownProp={true} />
    </StyleProvider>
  ).toJSON()

  t.is(el.props.align, undefined)
  t.is(el.props.unknownProp, true)
})

test('uses ReactComponent as base', (t) => {
  const renderer = createRenderer()

  const el = render(
    <StyleProvider renderer={renderer}>
      <Flex padding={20} align='center' />
    </StyleProvider>
  ).toJSON()

  t.is(el.props.className, 'a b c')
  t.is(el.props.align, undefined)
  t.true(renderer.rules.indexOf('padding:20') !== -1)
})
