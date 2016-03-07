import {isComponentOfType} from '../src';
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';

function OtherComponent() {
  return (
    <div />
  );
}

function WrongComponent() {
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

describe('`isComponentOfType`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.renderer.render(<Test />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should return `true` when a DOM component is the correct type', function() {
    expect(isComponentOfType(this.tree, 'div')).toBe(true);
  });

  it('should return `false` when a DOM component is not the correct type', function() {
    expect(isComponentOfType(this.tree, 'header')).toBe(false);
  });

  it('should return `true` when a composite component is the right type', function() {
    expect(isComponentOfType(this.tree.props.children, OtherComponent)).toBe(true);
  });

  it('should return `false` when a composite component is not the right type', function() {
    expect(isComponentOfType(this.tree.props.children, WrongComponent)).toBe(false);
  });
});
