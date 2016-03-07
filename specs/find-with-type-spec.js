import {findWithType} from '../src';
import {createRenderer} from 'react-addons-test-utils';
import React from 'react';

function OtherComponent() {
  return (
    <div className='other-component' />
  );
}

function TestWithTypes() {
  return (
    <div className='test-class'>
      <span />
      <div className='test-class test-class--modified' />
      <div className='test-class2 test-class2--modified' />
      <div className='test-class3 test-class3--modified' />
      <span>Some content</span>
      <OtherComponent test='test' />
    </div>
  );
}

describe('`findWithType`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.renderer.render(<TestWithTypes />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should find `OtherComponent` component', function() {
    expect(() => findWithType(this.tree, OtherComponent)).not.toThrow();
  });

  it('should not find exactly one `div` component', function() {
    expect(() => findWithType(this.tree, 'div')).toThrow();
  });

  it('should not find `button` component', function() {
    expect(() => findWithType(this.tree, 'button')).toThrow();
  });
});
