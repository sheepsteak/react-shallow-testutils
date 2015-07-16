import React from 'react/addons';
import findAll from './find-all';

export default function findAllWithType(root, type) {
  return findAll(root, component => {
    if (React.isValidElement(component)) {
      if (React.isValidElement(component)) {
        return component.type != null && component.type === type;
      }

      return false;
    }

    return false;
  });
}
