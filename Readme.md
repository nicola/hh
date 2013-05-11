
# hh

It makes a javascript function an high order function.

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
// will return a function
```

## License

MIT
