/**
 * Returns whether a component instance is a DOM component.
 *
 * @param  {ReactElement}     component
 * @return {Boolean}          whether the element is a DOM component
 */
export default function isDOMComponent(component) {
  return typeof component.type === 'string';
}
