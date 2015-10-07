import React from 'react/addons';
import ReactContext from 'react/lib/ReactContext';

const TestUtils = React.addons.TestUtils;

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
    ReactContext.current = context;
    this.renderer.render(fn(), context);
    ReactContext.current = {};

    return this.renderer.getRenderOutput();
  }
}
