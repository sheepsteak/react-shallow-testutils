/**
 * Returns whether an element instance is of a particular type.
 * @param  {ReactElement}     element       the element to check
 * @param  {Function|String}  componentType the type of element to check against
 * @return {Boolean}                        whether the element is the supplied type
 */
export default function isComponentOfType(element, componentType) {
  return element.type === componentType;
}
