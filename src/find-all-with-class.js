import React from "react";
import findAll from "./find-all";

/**
 * Returns true if the given parameter `classNameList` contains the
 * given parameter `className`.
 *
 * @param  {String}  classNameList String of all class names
 * @param  {String}  className     The class name to search for
 * @return {Boolean}
 */
function hasClassName(classNameList, className) {
  return ` ${classNameList} `.indexOf(` ${className} `) !== -1;
}

/**
 * Finds all elements in the tree with a class that matches `className`.
 *
 * This is different to React's `scryRenderedDOMComponentsWithClass` in that
 * it will check *all* components and not just DOM components.
 *
 * @param  {ReactElement} tree  the rendered tree to traverse
 * @param  {String} className   the class to find
 * @return {Array}              all matching elements
 */
export default function findAllWithClass(tree, className) {
  return findAll(tree, component => {
    if (React.isValidElement(component)) {
      if (component.props.className != null) {
        if (className.indexOf(".") !== -1) {
          const classNameList = className.split(".");

          return classNameList.every(val =>
            hasClassName(component.props.className, val),
          );
        }

        return hasClassName(component.props.className, className);
      }

      return false;
    }

    return false;
  });
}
