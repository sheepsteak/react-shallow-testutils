import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { findWithType } from "../src";

const OtherComponent = () => <div className="other-component" />;

const TestWithTypes = () => (
  <div className="test-class">
    <span />
    <div className="test-class test-class--modified" />
    <div className="test-class2 test-class2--modified" />
    <div className="test-class3 test-class3--modified" />
    <span>Some content</span>
    <OtherComponent test="test" />
  </div>
);

describe("`findWithType`", () => {
  let renderer;
  let tree;

  beforeEach(() => {
    renderer = createRenderer();
    tree = renderer.render(<TestWithTypes />);
  });

  it("should find `OtherComponent` component", () => {
    expect(() => findWithType(tree, OtherComponent)).not.toThrow();
  });

  it("should not find exactly one `div` component", () => {
    expect(() => findWithType(tree, "div")).toThrow();
  });

  it("should not find `button` component", () => {
    expect(() => findWithType(tree, "button")).toThrow();
  });
});
