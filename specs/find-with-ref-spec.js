import {findWithRef} from '../src';
import {createRenderer} from 'react-test-renderer/shallow';
import React from 'react';

class OtherComponent extends React.Component {
  render() {
    return (
      <div className='other-component' />
    );
  }
}

class TestWithRefs extends React.Component {
  render() {
    return (
      <div className='test-class'>
        <span />
        <div className='div-ref-class' ref='div-ref' />
        <input className='input-ref-class' ref='input-ref' />
        <OtherComponent ref='other-component-ref' test='test' />
      </div>
    );
  }
}

describe('`findWithRef`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.tree = this.renderer.render(<TestWithRefs />);
  });

  it('should find `OtherComponent` component', function() {
      expect(findWithRef(this.tree, 'other-component-ref').props.test).toBe('test');
  });

  it('should find `div` component', function() {
      expect(findWithRef(this.tree, 'div-ref').props.className).toBe('div-ref-class');
  });

  it('should find `input` component', function() {
    expect(findWithRef(this.tree, 'input-ref').props.className).toBe('input-ref-class');
  });

  it('should not find non existing ref', function() {
    expect(() => findWithRef(this.tree, 'non-existing')).toThrow();
  });

});
