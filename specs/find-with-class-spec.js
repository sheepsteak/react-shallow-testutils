import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { findWithClass } from "../src";

describe("`findWithClass`", () => {
  let renderer;
  let tree;

  beforeEach(() => {
    const TestWithClasses = () => (
      <div className="test-class">
        <span />
        <div className="test-class test-class--modified" />
        <div className="test-class2 test-class2--modified" />
        <div className="test-class3 test-class3--modified" />
        <span>Some content</span>
      </div>
    );

    renderer = createRenderer();
    tree = renderer.render(<TestWithClasses />);
  });

  it("should find `test-class2` component", () => {
    expect(() => findWithClass(tree, "test-class2")).not.toThrow();
  });

  it("should find one `test-class2--modified` component", () => {
    expect(() => findWithClass(tree, "test-class2--modified")).not.toThrow();
  });

  it("should find one `test-class2.test-class2--modified` component", () => {
    expect(() =>
      findWithClass(tree, "test-class2.test-class2--modified"),
    ).not.toThrow();
  });

  it("should not find exactly one `test-class` component", () => {
    expect(() => findWithClass(tree, "test-class")).toThrow();
  });

  it("should not find `test-class10` component", () => {
    expect(() => findWithClass(tree, "test-class10")).toThrow();
  });
});
