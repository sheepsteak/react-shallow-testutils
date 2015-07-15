import React from 'react/addons';
import ReactContext from 'react/lib/ReactContext';

const TestUtils = React.addons.TestUtils;

export default class Renderer {
  constructor() {
    this.renderer = TestUtils.createRenderer();
  }
  render(Component, context = {}, props = {}) {
    ReactContext.current = context;
    this.renderer.render(<Component {...props} />, context);
    ReactContext.current = {};

    return this.renderer.getRenderOutput();
  }
}
