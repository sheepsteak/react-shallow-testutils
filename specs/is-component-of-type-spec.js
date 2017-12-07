import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { isComponentOfType } from '../src';

const OtherComponent = () => <div />;

const WrongComponent = () => <div />;

const Test = () => (
  <div className="test-class">
    <OtherComponent />
  </div>
);

describe('`isComponentOfType`', () => {
  let renderer;
  let tree;

  beforeEach(() => {
    renderer = createRenderer();
    tree = renderer.render(<Test />);
  });

  it('should return `true` when a DOM component is the correct type', () => {
    expect(isComponentOfType(tree, 'div')).toBe(true);
  });

  it('should return `false` when a DOM component is not the correct type', () => {
    expect(isComponentOfType(tree, 'header')).toBe(false);
  });

  it('should return `true` when a composite component is the right type', () => {
    expect(isComponentOfType(tree.props.children, OtherComponent)).toBe(true);
  });

  it('should return `false` when a composite component is not the right type', () => {
    expect(isComponentOfType(tree.props.children, WrongComponent)).toBe(false);
  });
});
