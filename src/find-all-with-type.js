import React from 'react';
import findAll from './find-all';

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
export default function findAllWithType(tree, type) {
  return findAll(tree, component => {
    if (React.isValidElement(component)) {
      return component.type != null && component.type === type;
    }

    return false;
  });
}
