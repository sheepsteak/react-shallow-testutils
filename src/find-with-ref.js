import React from "react";
import findAll from "./find-all";

/**
 * Finds an element in the tree with a ref that matches `ref`.
 *
 * @param  {ReactElement} tree    the rendered tree to traverse
 * @param  {String}               ref to find
 * @return {ReactElement}         the found element
 */
export default function findWithRef(tree, ref) {
  const found = findAll(tree, component => {
    if (React.isValidElement(component)) {
      return component.ref != null && component.ref === ref;
    }

    return false;
  });

  if (found.length !== 1) {
    throw new Error(`Did not find exactly one match for ref: ${ref}`);
  }

  return found[0];
}
