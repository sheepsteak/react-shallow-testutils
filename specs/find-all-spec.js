import {findAll} from '../src';
import {createRenderer} from 'react-addons-test-utils';
import React from 'react';

function OtherComponent() {
  return (
    <div className='other-component' />
  );
}

function TestWithForm() {
  return (
    <div className='test-class'>
      <span />
      <div className='test-class test-class--modified' />
      <div className='test-class2 test-class2--modified' />
      <div className='test-class3 test-class3--modified' />
      <form
        action='/'
        method='post'>
        <input
          id='test'
          name='test'
          type='text' />
        <input
          id='test2'
          name='test2'
          type='text' />
        <button>Send</button>
      </form>
      <OtherComponent />
      <span>Some content</span>
    </div>
  );
}

describe('`findAll`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.renderer.render(<TestWithForm />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should traverse all thirteen items in tree', function() {
    let traversed = 0;

    findAll(this.tree, () => {
      traversed++;
    });

    expect(traversed).toBe(13);
  });

  it('should traverse child-first', function() {
    let traversed = 0;

    findAll(this.tree, component => {
      traversed++;

      switch(traversed) {
        case 1:
          expect(component.props.className).toBe('test-class');
          break;
        case 6:
          expect(component.type).toBe('form');
          break;
        case 11:
          expect(component.type).toBe(OtherComponent);
          break;
      }
    });
  });
});
