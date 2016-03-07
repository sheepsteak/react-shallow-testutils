import findAllWithProp from './find-all-with-prop';

/**
 * Find only one instance of a component in the tree with a prop found at the
 * `propPath` that matches `propValue`.
 *
 * @throws Will throw an error if none or more than one component is found.
 * @param  {ReactComponent} tree  the rendered tree to traverse
 * @param  {String} propPath      the prop path to find
 * @param  {*} propValue          the prop value to find
 * @return {ReactComponent}       the matching component
 */
export default function findWithProp(root, propPath, propValue) {
  const found = findAllWithProp(root, propPath, propValue);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly once match for prop: ${propPath}, with value: ${propValue}`);
  }

  return found[0];
}
