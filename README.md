# php-array-parser

✨ Parse a PHP array into JavaScript

## Installation

```shell
  npm install php-array-parser
```

## Usage

```js
const parser = require('php-array-parser')
parser.parse(`
  array(
    "foo" => "bar",
    "bar" => "foo",
  );
`)

// > { foo: 'bar', bar: 'foo' }
```

#### Tests

```shell
npm run test
```
