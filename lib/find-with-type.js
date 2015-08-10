'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = findWithType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _findAllWithType = require('./find-all-with-type');

var _findAllWithType2 = _interopRequireDefault(_findAllWithType);

/**
 * Find only one instance of a components in the tree with a type that matches
 * `type`.
 *
 * This is like both React's `findRenderedDOMComponentWithTag` and
 * `findRenderedComponentWithType` as you can supply a component class or a
 * DOM tag.
 *
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @return {ReactComponent}       the matching component
 */

function findWithType(root, type) {
  var found = (0, _findAllWithType2['default'])(root, type);

  if (found.length !== 1) {
    throw new Error('Did not find exactly once match for type: ' + type);
  }

  return found[0];
}

module.exports = exports['default'];