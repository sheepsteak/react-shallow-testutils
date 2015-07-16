import findWithType from '../src/find-with-type';
import Renderer from '../src/renderer';
import React from 'react';

class OtherComponent extends React.Component {
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
        <span>Some content</span>
        <OtherComponent test='test' />
      </div>
    );
  }
}

describe('`findWithType`', function() {
  beforeEach(function() {
    this.renderer = new Renderer();
    this.tree = this.renderer.render(TestWithTypes, {}, {});
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
