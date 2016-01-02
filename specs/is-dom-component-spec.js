import {isDOMComponent} from '../src';
import {createRenderer} from 'react-addons-test-utils';
import React from 'react';

function OtherComponent() {
  return (
    <div />
  );
}

function Test() {
  return (
    <div className='test-class'>
      <OtherComponent />
    </div>
  );
}

describe('`isDOMComponent`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.renderer.render(<Test />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should return `true` for a DOM component', function() {
    expect(isDOMComponent(this.tree)).toBe(true);
  });

  it('should return `false` for a composite component', function() {
    expect(isDOMComponent(this.tree.props.children)).toBe(false);
  });
});
