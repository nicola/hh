/**
 * Gets a function and optional arguments and returns an high order function
 * You can use it to return function passing parameters when writing callbacks
 * http://en.wikipedia.org/wiki/Partial_application
 *
 *    function test(item) {
 *      console.log(item);
 *    }
 *
 *    hh(test, "this is a test");
 *    // will return a function
 *
 *
 * @param {Object} obj
 * @param {Element} el
 * @api public
 */

function hh(func) {
  var args = Array.prototype.slice.call(arguments).splice(1);
  return function() {
    var allArguments = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(this, allArguments);
  };
}

module.exports = hh;