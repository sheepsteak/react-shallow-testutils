/**
 * Returns whether a component instance is of a particular type.
 * @param  {ReactComponent}   component     the component to check
 * @param  {Function|String}  componentType the type of component to check against
 * @return {Boolean}                        whether the element is the supplied type
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isComponentOfType;

function isComponentOfType(component, componentType) {
  return component.type === componentType;
}

module.exports = exports["default"];