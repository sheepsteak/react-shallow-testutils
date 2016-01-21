/**
 * Returns the mounted component from a shallow renderer.
 *
 * This function will be on the shallow renderer itself in React 0.15 but I've
 * included it in this module for now as it's so useful. It allows you to call
 * instance functions like `forceUpdate`.
 *
 * @param  {ReactShallowRenderer} renderer  the shallow renderer
 * @return {?ReactComponent}                the matching component
 */
export default function(renderer) {
  return renderer._instance ? renderer._instance._instance : null;
}
