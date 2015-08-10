/**
 * Returns whether a component instance is a DOM component.
 *
 * @param  {ReactElement}     component
 * @return {Boolean}          whether the element is a DOM component
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = isDOMComponent;

function isDOMComponent(component) {
  return typeof component.type === 'string';
}

module.exports = exports['default'];