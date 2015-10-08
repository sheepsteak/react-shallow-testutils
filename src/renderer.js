import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

/**
 * Wraps a React shallow renderer instance that can set a context.
 */
export default class Renderer {
  /**
   * Creates a new `Renderer`
   */
  constructor() {
    this.renderer = ReactTestUtils.createRenderer();
  }

  get root() {
    return this.renderer._instance ? this.renderer._instance._instance : null;
  }

  /**
   * Renders the `Component` into the shallow renderer instance.
   *
   * @param  {Function} fn              the function to call to get React elements
   * @param  {Object} [context={}]      the context to render the component into
   * @return {ReactComponent}           the rendered tree
   */
  render(fn, context = {}) {
    this.renderer.render(fn(), context);

    return this.renderer.getRenderOutput();
  }
}
