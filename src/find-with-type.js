import findAllWithType from './find-all-with-type';

/**
 * Find only one instance of a components in the tree with a type that matches
 * `type`.
 *
 * This is like both React's `findRenderedDOMComponentWithTag` and
 * `findRenderedComponentWithType` as you can supply a component class or a
 * DOM tag.
 *
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @return {ReactComponent}       the matching component
 */
export default function findWithType(root, type) {
  const found = findAllWithType(root, type);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly once match for type: ${type}`);
  }

  return found[0];
}
