import findAllWithType from './find-all-with-type';

/**
 * Find only one element in the tree with a `type` prop that matches `type`.
 *
 * This is like both React's `findRenderedDOMComponentWithTag` and
 * `findRenderedComponentWithType` as you can supply a component class or a
 * DOM tag.
 *
 * @param  {ReactElement} tree    the rendered tree to traverse
 * @param  {Function|String} type the component type or tag to find
 * @return {ReactElement}         the matching element
 */
export default function findWithType(root, type) {
  const found = findAllWithType(root, type);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly one match for type: ${type}`);
  }

  return found[0];
}
