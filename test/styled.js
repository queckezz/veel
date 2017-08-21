
import styled, { StyleProvider, createRenderer } from '../src'
import { create as render } from 'react-test-renderer'
import React from 'react'
import test from 'ava'

const defaultRenderer = createRenderer()

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