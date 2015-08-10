'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = findAll;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Traverses the tree and returns all components that satisfy the function `test`.
 *
 * @param  {ReactComponent} tree the tree to traverse
 * @param  {Function} test       the test for each component
 * @return {Array}               the components that satisfied `test`
 */

function findAll(tree, test) {
  var found = test(tree) ? [tree] : [];

  if (_react2['default'].isValidElement(tree)) {
    if (_react2['default'].Children.count(tree.props.children) > 0) {
      _react2['default'].Children.forEach(tree.props.children, function (child) {
        found = found.concat(findAll(child, test));
      });
    }
  }

  return found;
}

module.exports = exports['default'];