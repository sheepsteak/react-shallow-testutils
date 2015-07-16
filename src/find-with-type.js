import findAllWithType from './find-all-with-type';

export default function findWithType(root, type) {
  const found = findAllWithType(root, type);

  if (found.length !== 1) {
    throw new Error(`Did not find exactly once match for type: ${type}`);
  }

  return found[0];
}
