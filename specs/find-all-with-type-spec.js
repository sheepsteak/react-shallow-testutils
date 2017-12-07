import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { findAllWithType } from '../src';

const OtherComponent = () => (
  <div className="other-component" />
);

const YetAnotherComponent = () => (
  <div className="other-component" />
);

const TestWithTypes = () => (
  <div className="test-class">
    <span />
    <div className="test-class test-class--modified" />
    <div className="test-class2 test-class2--modified" />
    <div className="test-class3 test-class3--modified" />
    <OtherComponent test={1} />
    <OtherComponent test={2} />
    <OtherComponent test={3} />
    <YetAnotherComponent test={1} />
    <YetAnotherComponent test={2} />
    <YetAnotherComponent test={3} />
  </div>
);

describe('`findAllWithType`', () => {
  let renderer;
  let tree;

  beforeEach(() => {
    renderer = createRenderer();
    tree = renderer.render(<TestWithTypes />);
  });

  it('should find three `OtherComponent` components', () => {
    const found = findAllWithType(tree, OtherComponent);

    expect(found.length).toBe(3);
  });

  it('should find three `YetAnotherComponent` components', () => {
    const found = findAllWithType(tree, YetAnotherComponent);

    expect(found.length).toBe(3);
  });

  it('should find four `div` components', () => {
    const found = findAllWithType(tree, 'div');

    expect(found.length).toBe(4);
  });

  it('should find no `button` components', () => {
    const found = findAllWithType(tree, 'button');

    expect(found.length).toBe(0);
  });
});
