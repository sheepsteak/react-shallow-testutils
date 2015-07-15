import React from 'react';

export default function findAll(component, test) {
  let found = test(component) ? [component] : [];

  if (React.isValidElement(component)) {
    if (React.Children.count(component.props.children) > 0) {
      React.Children.forEach(component.props.children, (child) => {
        found = found.concat(findAll(child, test));
      });
    }
  }

  return found;
}
