
![logo](./logo.png)

# veel [![NPM version][version-image]][version-url] [![Js Standard Style][standard-image]][standard-url]

:eyeglasses: Create visual React components using [Fela](http://ghub.io/fela) (An alternative to [react-fela](http://ghub.io/fela))

```
npm install veel
```

## Example

```js
import { color } from 'styled-system'
import styled from 'veel'

const align = props => props.align
    ? { alignItems: props.align }
    : null

const Flex = styled('div')(
  { display: 'flex' },
  color,
  align
)
```

## Author

**veel** © [Fabian Eichenberger](https://github.com/queckezz), Released under the [MIT](./license) License.<br>
Authored and maintained by Fabian Eichenberger with help from contributors ([list](https://github.com/queckezz/veel/contributors)).

> GitHub [@queckezz](https://github.com/queckezz) · Twitter [@queckezz](https://twitter.com/queckezz)

[version-image]: https://img.shields.io/npm/v/veel.svg?style=flat-square
[version-url]: https://npmjs.org/package/veel

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
