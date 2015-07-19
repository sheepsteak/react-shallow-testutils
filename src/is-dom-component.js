export default function isDOMComponent(component) {
  return typeof component.type === 'string';
}
