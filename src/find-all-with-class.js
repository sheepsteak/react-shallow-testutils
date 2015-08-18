import React from 'react/addons';
import findAll from './find-all';

/**
 * Returns true if the given parameter classNameList contains the
 * given paramter className.
 *
 * @param  {String}  classNameList String of all class names
 * @param  {String}  className     The class name to search for
 * @return {Boolean}
 */
function hasClassName(classNameList, className) {
  return ` ${classNameList} `.indexOf(` ${className} `) !== -1;
}

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

        if (className.includes('.')) {
          const classNameList = className.split('.');

          return classNameList.every(function(val) {
              return hasClassName(component.props.className, val);
          });
        }

        return hasClassName(component.props.className, className);
      }

      return false;
    }

    return false;
  });
}
