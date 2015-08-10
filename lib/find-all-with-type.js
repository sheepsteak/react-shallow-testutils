'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = findAllWithType;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _findAll = require('./find-all');

var _findAll2 = _interopRequireDefault(_findAll);

/**
 * Finds all instances of components in the tree with a type that matches
 * `type`.
 *
 * This is like both React's `scryRenderedDOMComponentsWithTag` and
 * `scryRenderedComponentsWithType` as you can supply a component class or a
 * DOM tag.
 *
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @return {Array}                all matching components
 */

function findAllWithType(tree, type) {
  return (0, _findAll2['default'])(tree, function (component) {
    if (_react2['default'].isValidElement(component)) {
      if (_react2['default'].isValidElement(component)) {
        return component.type != null && component.type === type;
      }

      return false;
    }

    return false;
  });
}

module.exports = exports['default'];