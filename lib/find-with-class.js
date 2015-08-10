'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = findWithClass;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _findAllWithClass = require('./find-all-with-class');

var _findAllWithClass2 = _interopRequireDefault(_findAllWithClass);

/**
 * Find only one instance of a component in the tree with a class that matches
 * `className`.
 *
 * This is different to React's `findRenderedDOMComponentWithClass` in that
 * it will check *all* components and not just DOM components.
 *
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {String} className     the class to find
 * @return {ReactComponent}       the matching component
 */

function findWithClass(root, className) {
  var found = (0, _findAllWithClass2['default'])(root, className);

  if (found.length !== 1) {
    throw new Error('Did not find exactly once match for class: ' + className);
  }

  return found[0];
}

module.exports = exports['default'];