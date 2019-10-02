import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { findAll } from "../src";

const OtherComponent = () => <div className="other-component" />;

const TestWithForm = () => (
  <div className="test-class">
    <span />
    <div className="test-class test-class--modified" />
    <div className="test-class2 test-class2--modified" />
    <div className="test-class3 test-class3--modified" />
    <form action="/" method="post">
      <input id="test" name="test" type="text" />
      <input id="test2" name="test2" type="text" />
      <button type="submit">Send</button>
    </form>
    <OtherComponent />
    <span>Some content</span>
  </div>
);

describe("`findAll`", () => {
  let renderer;
  let tree;

  beforeEach(() => {
    renderer = createRenderer();
    tree = renderer.render(<TestWithForm />);
  });

  it("should traverse all thirteen items in tree", () => {
    let traversed = 0;

    findAll(tree, () => {
      traversed += 1;
    });

    expect(traversed).toBe(13);
  });

  it("should traverse child-first", () => {
    let traversed = 0;

    findAll(tree, component => {
      traversed += 1;

      switch (traversed) {
        case 1:
          expect(component.props.className).toBe("test-class");
          break;
        case 6:
          expect(component.type).toBe("form");
          break;
        case 11:
          expect(component.type).toBe(OtherComponent);
          break;
        default:
          break;
      }
    });
  });
});
