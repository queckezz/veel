
![logo](./logo.png)

# veel [![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls]

:package: Base styling components using [`styled-system`](https://ghub.io/styled-system) and [`fela`](https://ghub.io/fela)

* **Low-Level** - Veel exposes only a few components which can be used as a base layer to build your UI components upon.
* **Consistency** - Veel uses `styled-system` which encourages consistency of spacing, typography and color
* **Universal** - By using fela it's really easy to prerender your styles on the server or anywhere.

```
npm install veel
```

```js
const Badge = (props) => (
  <Box
    m={2}
    fontSize={2}
    bg='tomato'
    css={{ textDecoration: 'underline' }}
    {...props}
  />
)
```

## Usage

1. Create a `fela` renderer.

```js
const renderer = createRenderer()
```

2. Wrap your application in a `StyleProvider` so that each `veel` component has access to the renderer and the optional theme.

```js
class App extends React.Component {
  render() {
    return (
      <StyleProvider={renderer}>
        <Box is='h1' fontSize={2}>Application</Box>
      </StyleProvider>
    )
  }
}
```

3. Now you need some way of injecting the generated css into the html. There are many ways to do it, each with their positive and negative aspects.

**Injecting the css dynamically**
```js
require('inject-css')(renderer.renderToString())
```

**Render to a sheet list (next.js example)**

This makes the most sense when you also create the document skeleton with JSX. (like with [Next.js](https://ghub.io/next)

```js
import Document, { Head } from 'next/document'

class CustomDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const sheets = renderer.renderToSheetList()
    renderer.clear()
    return { ...page, sheets }
  }

  render () {
    const sheets = this.props.sheets
    return (
      <Head>
        {sheets.map(({ type, media, css }) => (
          <style data-fela-type={type} media={media}>{css}</style>
        ))}
      </Head>

      ...
    )
  }
}
```

4. You're done!

## `<Box />`

The core layout component. Take a look at [`styled-system`](https://github.com/jxnblk/styled-system/blob/master/README.md) for documentation on `<Box />` `props`.

## Author

**veel** © [Fabian Eichenberger](https://github.com/queckezz), Released under the [MIT](./license) License.<br>
Authored and maintained by Fabian Eichenberger with help from contributors ([list](https://github.com/queckezz/veel/contributors)).

> GitHub [@queckezz](https://github.com/queckezz) · Twitter [@queckezz](https://twitter.com/queckezz)

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
