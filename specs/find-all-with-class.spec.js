import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { findAllWithClass } from "../src";

describe("`findAllWithClass`", () => {
  let renderer;
  let tree;

  beforeEach(() => {
    const TestWithClasses = () => (
      <div className="test-class">
        <span />
        <div className="test-class test-class--modified" />
        <div className="test-class2 test-class2--modified" />
        <div className="test-class2 test-class2--modified" />
        <div className="test-class3 test-class3--modified" />
        <span>Some content</span>
      </div>
    );

    renderer = createRenderer();
    tree = renderer.render(<TestWithClasses />);
  });

  it("should find two `test-class` components", () => {
    const found = findAllWithClass(tree, "test-class");

    expect(found.length).toBe(2);
  });

  it("should find two `test-class2--modified` component", () => {
    const found = findAllWithClass(tree, "test-class2--modified");

    expect(found.length).toBe(2);
  });

  it("should find two `test-class2.test-class2--modified` components", () => {
    const found = findAllWithClass(tree, "test-class2.test-class2--modified");

    expect(found.length).toBe(2);
  });

  it("should find no `test-class2.test-class10--modified` components", () => {
    const found = findAllWithClass(tree, "test-class2.test-class10");

    expect(found.length).toBe(0);
  });

  it("should find no `test-class10` components", () => {
    const found = findAllWithClass(tree, "test-class10");

    expect(found.length).toBe(0);
  });
});
