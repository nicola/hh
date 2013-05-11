
# hh

Simple partial application library (high order function)

## Installation

Server side

    $ npm install hh

Browser side (using component.io)

    $ component install nicolagreco/hh

## Usage

```js

var hh = require('hh');
function test(item) {
  console.log(item);
}
  
hh(test, "this is a test");
// it will return a function
// instead of
function() { return test("this is a test");}

```

## License

MIT
