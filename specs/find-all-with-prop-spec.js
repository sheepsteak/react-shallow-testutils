import {findAllWithProp} from '../src';
import {createRenderer} from 'react-addons-test-utils';
import React from 'react';

describe('`findAllWithProp`', function() {
  beforeEach(function() {
    function TestComponent() {
      const deepObject = {
        top: {
          deep: true
        }
      };

      return (
        <div className='test-class'>
          <div sameProp='same' testProp1={1} />
          <div sameProp='same' testProp2='testProp2Value' />
          <div sameProp='same' testProp2='testProp2Value' testProp3={deepObject} />
          <div sameProp='same' testProp3={deepObject} />
        </div>
      );
    }

    this.renderer = createRenderer();
    this.renderer.render(<TestComponent />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should find one component with `testProp1` equal to `1`', function() {
    const found = findAllWithProp(this.tree, 'testProp1', 1);

    expect(found.length).toBe(1);
  });

  it('should find no component with `testProp1` equal to `2`', function() {
    const found = findAllWithProp(this.tree, 'testProp1', 2);

    expect(found.length).toBe(0);
  });

  it('should find two components with `testProp3.top` equal to `{deep:true}`', function() {
    const found = findAllWithProp(this.tree, 'testProp3.top', {deep:true});

    expect(found.length).toBe(2);
  });

  it('should find no components with `testProp3.top` equal to `{deep:false}`', function() {
    const found = findAllWithProp(this.tree, 'testProp3.top', {deep:false});

    expect(found.length).toBe(0);
  });

  it('should find four components with `sameProp` equal to `same`', function() {
    const found = findAllWithProp(this.tree, 'sameProp', 'same');

    expect(found.length).toBe(4);
  });

  it('should find no components with `sameProp` equal to `not-same`', function() {
    const found = findAllWithProp(this.tree, 'sameProp', 'not-same');

    expect(found.length).toBe(0);
  });

  it('should find no components with non-existant prop', function() {
    const found = findAllWithProp(this.tree, 'blahblahblah', 1);

    expect(found.length).toBe(0);
  });
});
