/**
 * Returns whether an element is a DOM element.
 *
 * @param  {ReactElement}     element
 * @return {Boolean}          whether the element is a DOM element
 */
export default function isDOMComponent(element) {
  return typeof element.type === "string";
}
