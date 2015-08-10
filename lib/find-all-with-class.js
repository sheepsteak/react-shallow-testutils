'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = findAllWithClass;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findAll = require('./find-all');

var _findAll2 = _interopRequireDefault(_findAll);

/**
 * Finds all instances of components in the tree with a class that matches
 * `className`.
 *
 * This is different to React's `scryRenderedDOMComponentsWithClass` in that
 * it will check *all* components and not just DOM components.
 *
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {String} className     the class to find
 * @return {Array}                all matching components
 */

function findAllWithClass(tree, className) {
  return (0, _findAll2['default'])(tree, function (component) {
    if (_react2['default'].isValidElement(component)) {
      if (component.props.className != null) {
        return (' ' + component.props.className + ' ').indexOf(' ' + className + ' ') !== -1;
      }

      return false;
    }

    return false;
  });
}

module.exports = exports['default'];