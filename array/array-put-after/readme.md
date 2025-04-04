# Put after [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/put-after/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/put-after)

Put an element after another element.

[![NPM Badge](https://nodei.co/npm/put-after.png)](https://npmjs.com/package/put-after)

## Install

```sh
npm install put-after
```

## Usage

```js
const putAfter = require("put-after")

putAfter("ac", "a", "b")
//=> 'abc'

putAfter(["a", "c"], "a", "b")
//=> ['a', 'b', 'c']
```

## API

### putAfter(source, find, add)

#### source

Type: `string | array`

The element to search.

#### find

Type: `string | number`

The search key. Can be a specific part of the element or an index.

#### add

Type: `any`

The element to add.
