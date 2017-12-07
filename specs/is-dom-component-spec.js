import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { isDOMComponent } from "../src";

const OtherComponent = () => <div className="other-component" />;

const Test = () => (
  <div className="test-class">
    <OtherComponent />
  </div>
);

describe("`isDOMComponent`", () => {
  let renderer;
  let tree;

  beforeEach(() => {
    renderer = createRenderer();
    tree = renderer.render(<Test />);
  });

  it("should return `true` for a DOM component", () => {
    expect(isDOMComponent(tree)).toBe(true);
  });

  it("should return `false` for a composite component", () => {
    expect(isDOMComponent(tree.props.children)).toBe(false);
  });
});
