import React from "react";

/**
 * Traverses the tree and returns all elements that satisfy the function `test`.
 *
 * @param  {ReactElement}   tree the tree to traverse
 * @param  {Function} test  the test for each component
 * @return {Array}          the elements that satisfied `test`
 */
export default function findAll(tree, test) {
  let found = test(tree) ? [tree] : [];

  if (React.isValidElement(tree)) {
    if (React.Children.count(tree.props.children) > 0) {
      React.Children.forEach(tree.props.children, child => {
        found = found.concat(findAll(child, test));
      });
    }
  }

  return found;
}
