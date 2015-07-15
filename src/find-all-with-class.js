import React from 'react/addons';
import findAll from './find-all';

export default function findAllWithClass(root, className) {
  return findAll(root, component => {
    if (React.isValidElement(component)) {
      if(component.props.className != null) {
        return ` ${component.props.className} `.indexOf(` ${className} `) !== -1;
      }

      return false;
    }

    return false;
  });
}
