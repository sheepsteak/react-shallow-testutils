import {findWithProp} from '../src';
import {createRenderer} from 'react-addons-test-utils';
import React from 'react';

describe('`findWithProp`', function() {
  beforeEach(function() {
    function TestComponent() {
      const deepObject = {
        top: {
          deep: true
        }
      };

      const deepArray = [{
        name: 'Dave'
      }, {
        name: 'Sarah'
      }, {
        name: 'John'
      }];

      return (
        <div className='test-class'>
          <div sameProp='same' testProp1={1} />
          <div sameProp='same' testProp2='testProp2Value' />
          <div sameProp='same' testProp3={deepObject} />
          <div sameProp='same' testProp4={deepArray} />
        </div>
      );
    }

    this.renderer = createRenderer();
    this.renderer.render(<TestComponent />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should find component with `testProp1` equal to `1`', function() {
    expect(() => findWithProp(this.tree, 'testProp1', 1)).not.toThrow();
  });

  it('should not find component with `testProp1` equal to `2`', function() {
    expect(() => findWithProp(this.tree, 'testProp1', 2)).toThrow();
  });

  it('should find component with `testProp2` equal to `testProp2Value`', function() {
    expect(() => findWithProp(this.tree, 'testProp2', 'testProp2Value')).not.toThrow();
  });

  it('should not find component with `testProp2` equal to `NOTtestProp2Value`', function() {
    expect(() => findWithProp(this.tree, 'testProp2', 'NOTtestProp2Value')).toThrow();
  });

  it('should find component with `testProp3.top` equal to `{deep:true}`', function() {
    expect(() => findWithProp(this.tree, 'testProp3.top', {deep:true})).not.toThrow();
  });

  it('should not find component with `testProp3.top` equal to `{deep:false}`', function() {
    expect(() => findWithProp(this.tree, 'testProp3.top', {deep:false})).toThrow();
  });

  it('should find component with `testProp4[1].name` equal to `{name: Sarah}`', function() {
    expect(() => findWithProp(this.tree, 'testProp4[1]', {name: 'Sarah'})).not.toThrow();
  });

  it('should find component with `testProp4[1].name` equal to `{name: Chris}`', function() {
    expect(() => findWithProp(this.tree, 'testProp4[1]', {name: 'Chris'})).toThrow();
  });

  it('should not find exactly one component with `sameProp` equal to `same`', function() {
    expect(() => findWithProp(this.tree, 'sameProp', 'same')).toThrow();
  });

  it('should find no components with non-existant prop', function() {
    expect(() => findWithProp(this.tree, 'blahblahblah', 1)).toThrow();
  });
});
