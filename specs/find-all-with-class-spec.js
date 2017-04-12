import {findAllWithClass} from '../src';
import {createRenderer} from 'react-test-renderer/shallow';
import React from 'react';

describe('`findAllWithClass`', function() {
  beforeEach(function() {
    class TestWithClasses extends React.Component {
      render() {
        return (
          <div className='test-class'>
            <span />
            <div className='test-class test-class--modified' />
            <div className='test-class2 test-class2--modified' />
            <div className='test-class2 test-class2--modified' />
            <div className='test-class3 test-class3--modified' />
            <span>Some content</span>
          </div>
        );
      }
    }

    this.renderer = createRenderer();
    this.tree = this.renderer.render(<TestWithClasses />);
  });

  it('should find two `test-class` components', function() {
    const found = findAllWithClass(this.tree, 'test-class');

    expect(found.length).toBe(2);
  });

  it('should find two `test-class2--modified` component', function() {
    const found = findAllWithClass(this.tree, 'test-class2--modified');

    expect(found.length).toBe(2);
  });

  it('should find two `test-class2.test-class2--modified` components', function() {
    const found = findAllWithClass(this.tree, 'test-class2.test-class2--modified');

    expect(found.length).toBe(2);
  });

  it('should find no `test-class2.test-class10--modified` components', function() {
    const found = findAllWithClass(this.tree, 'test-class2.test-class10');

    expect(found.length).toBe(0);
  });

  it('should find no `test-class10` components', function() {
    const found = findAllWithClass(this.tree, 'test-class10');

    expect(found.length).toBe(0);
  });
});
