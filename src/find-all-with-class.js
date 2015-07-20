import React from 'react/addons';
import findAll from './find-all';

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
export default function findAllWithClass(tree, className) {
  return findAll(tree, component => {
    if (React.isValidElement(component)) {
      if(component.props.className != null) {
        return ` ${component.props.className} `.indexOf(` ${className} `) !== -1;
      }

      return false;
    }

    return false;
  });
}
