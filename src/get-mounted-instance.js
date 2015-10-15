export default function(renderer) {
  return renderer._instance ? renderer._instance._instance : null;
}
