import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { findWithRef } from "../src";

const OtherComponent = () => <div className="other-component" />;

/* eslint-disable react/no-string-refs */
class TestWithRefs extends React.Component {
  render() {
    return (
      <div className="test-class">
        <span />
        <div className="div-ref-class" ref="div-ref" />
        <input className="input-ref-class" ref="input-ref" />
        <OtherComponent ref="other-component-ref" test="test" />
      </div>
    );
  }
}
/* eslint-enable react/no-string-refs */

describe("`findWithRef`", () => {
  let renderer;
  let tree;

  beforeEach(() => {
    renderer = createRenderer();
    tree = renderer.render(<TestWithRefs />);
  });

  it("should find `OtherComponent` component", () => {
    expect(findWithRef(tree, "other-component-ref").props.test).toBe("test");
  });

  it("should find `div` component", () => {
    expect(findWithRef(tree, "div-ref").props.className).toBe("div-ref-class");
  });

  it("should find `input` component", () => {
    expect(findWithRef(tree, "input-ref").props.className).toBe(
      "input-ref-class",
    );
  });

  it("should not find non existing ref", () => {
    expect(() => findWithRef(tree, "non-existing")).toThrow();
  });
});
