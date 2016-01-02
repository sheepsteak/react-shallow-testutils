import isEqual from 'lodash.isequal';
import findAll from './find-all';
import get from 'lodash.get';
import React from 'react';

/**
 * Finds all instances of components in the tree with a prop found at the
 * `propPath` that matches `propValue`.
 *
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {String} propPath      the prop path to find
 * @param  {*} propValue          the prop value to find
 * @return {Array}                all matching components
 */
export default function findAllWithProp(tree, propPath, propValue) {
  return findAll(tree, component => {
    if (React.isValidElement(component)) {
      const value = get(component.props, propPath);

      return isEqual(value, propValue);
    }

    return false;
  });
}
