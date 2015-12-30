import {getMountedInstance} from '../src';
import React from 'react';
import {createRenderer, isCompositeComponentWithType} from 'react-addons-test-utils';

class OtherComponent extends React.Component {
  render() {
    return (
      <div className='other-component' />
    );
  }
}

describe('`getMountedInstance`', function() {
  it('should return the root component instance from renderer', function() {
    const renderer = createRenderer();
    renderer.render(<OtherComponent />);

    const instance = getMountedInstance(renderer);

    // Since this is a component instance and *not* shallow render output we need
    // to use the existing React TestUtils.
    expect(isCompositeComponentWithType(instance, OtherComponent)).toBe(true);
  });

});
