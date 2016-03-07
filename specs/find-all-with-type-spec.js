import {findAllWithType} from '../src';
import {createRenderer} from 'react-addons-test-utils';
import React from 'react';

function OtherComponent() {
  return (
    <div className='other-component' />
  );
}

function YetAnotherComponent() {
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
      <OtherComponent test={1} />
      <OtherComponent test={2} />
      <OtherComponent test={3} />
      <YetAnotherComponent test={1} />
      <YetAnotherComponent test={2} />
      <YetAnotherComponent test={3} />
    </div>
  );
}

describe('`findAllWithType`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.renderer.render(<TestWithTypes />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should find three `OtherComponent` components', function() {
    const found = findAllWithType(this.tree, OtherComponent);

    expect(found.length).toBe(3);
  });

  it('should find three `YetAnotherComponent` components', function() {
    const found = findAllWithType(this.tree, YetAnotherComponent);

    expect(found.length).toBe(3);
  });

  it('should find four `div` components', function() {
    const found = findAllWithType(this.tree, 'div');

    expect(found.length).toBe(4);
  });

  it('should find no `button` components', function() {
    const found = findAllWithType(this.tree, 'button');

    expect(found.length).toBe(0);
  });
});
