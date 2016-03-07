import findAllWithClass from './find-all-with-class';

/**
 * Find only one element in the tree with a `className` prop that matches
 * `className`.
 *
 * This is different to React's `findRenderedDOMComponentWithClass` in that
 * it will check *all* components and not just DOM components.
 *
 * @param  {ReactElement} tree  the rendered tree to traverse
 * @param  {String} className   the class to find
 * @return {ReactElement}       the matching element
 */
export default function findWithClass(root, className) {
  const found = findAllWithClass(root, className);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly one match for class: ${className}`);
  }

  return found[0];
}
