# react-flex-grid

> lightweight grid system for react applications which uses css flexbox under the hood&quot;,

[![NPM](https://img.shields.io/npm/v/react-flex-grid.svg)](https://www.npmjs.com/package/react-flex-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-flex-grid
```

## Example

[![View on Codesandbox](https://img.shields.io/badge/Codesandbox-000000?style=for-the-badge&logo=CodeSandbox&logoColor=white)](https://codesandbox.io/s/react-flex-grids-60elb?file=/src/App.js)

## Usage

```tsx
import React, { Component, useState } from 'react'

import ReactFlexGrids from 'react-flex-grid'
import 'react-flex-grid/dist/index.css'

export default function Example {

  const [order, setOrder] = useState({})

  return <ReactFlexGrids flexOrders={order} onOrderChange={newOrder => steOrder(newOrder)} />

}
```

## License

MIT © [https://github.com/kiran-venugopal](https://github.com/https://github.com/kiran-venugopal)
