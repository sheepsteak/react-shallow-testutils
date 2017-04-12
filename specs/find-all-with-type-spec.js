import {findAllWithType} from '../src';
import {createRenderer} from 'react-test-renderer/shallow';
import React from 'react';

class OtherComponent extends React.Component {
  render() {
    return (
      <div className='other-component' />
    );
  }
}

class YetAnotherComponent extends React.Component {
  render() {
    return (
      <div className='other-component' />
    );
  }
}

class TestWithTypes extends React.Component {
  render() {
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
}

describe('`findAllWithType`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.tree = this.renderer.render(<TestWithTypes />);
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
