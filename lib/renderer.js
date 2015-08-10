'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

/**
 * Wraps a React shallow renderer instance that can set a context.
 */

var Renderer = (function () {
  /**
   * Creates a new `Renderer`
   */

  function Renderer() {
    _classCallCheck(this, Renderer);

    this.renderer = _reactAddonsTestUtils2['default'].createRenderer();
  }

  /**
   * Renders the `Component` into the shallow renderer instance.
   *
   * @param  {ReactComponent} Component the component to render
   * @param  {Object} [context={}]      the context to render the component into
   * @param  {Object} [props={}]        the props to pass into the component
   * @return {ReactComponent}           the rendered tree
   */

  _createClass(Renderer, [{
    key: 'render',
    value: function render(Component) {
      var context = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var props = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      this.renderer.render(_react2['default'].createElement(Component, props), context);

      return this.renderer.getRenderOutput();
    }
  }]);

  return Renderer;
})();

exports['default'] = Renderer;
module.exports = exports['default'];