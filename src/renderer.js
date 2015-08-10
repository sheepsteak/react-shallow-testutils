import React from 'react';
import TestUtils from 'react-addons-test-utils';

/**
 * Wraps a React shallow renderer instance that can set a context.
 */
export default class Renderer {
  /**
   * Creates a new `Renderer`
   */
  constructor() {
    this.renderer = TestUtils.createRenderer();
  }
  /**
   * Renders the `Component` into the shallow renderer instance.
   *
   * @param  {ReactComponent} Component the component to render
   * @param  {Object} [context={}]      the context to render the component into
   * @param  {Object} [props={}]        the props to pass into the component
   * @return {ReactComponent}           the rendered tree
   */
  render(Component, context = {}, props = {}) {
    this.renderer.render(<Component {...props} />, context);

    return this.renderer.getRenderOutput();
  }
}
