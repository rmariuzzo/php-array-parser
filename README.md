<h1 align="center">PHP array Parser</h1>
<p align="center">Parse a PHP array into JavaScript!</p>

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
