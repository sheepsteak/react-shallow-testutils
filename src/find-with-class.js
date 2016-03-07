import findAllWithClass from './find-all-with-class';

/**
 * Find only one instance of a component in the tree with a class that matches
 * `className`.
 *
 * This is different to React's `findRenderedDOMComponentWithClass` in that
 * it will check *all* components and not just DOM components.
 *
 * @throws Will throw an error if none or more than one component is found.
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {String} className     the class to find
 * @return {ReactComponent}       the matching component
 */
export default function findWithClass(root, className) {
  const found = findAllWithClass(root, className);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly one match for class: ${className}`);
  }

  return found[0];
}
