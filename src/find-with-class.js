import findAllWithClass from './find-all-with-class';

export default function findWithClass(root, className) {
  const found = findAllWithClass(root, className);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly once match for class: ${className}`);
  }

  return found[0];
}
