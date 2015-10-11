import isComponentOfType from '../src/is-component-of-type';
import React from 'react';
import {createRenderer} from 'react-addons-test-utils';

class OtherComponent extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

class WrongComponent extends React.Component {
  render() {
    return (
      <div />
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <div className='test-class'>
        <OtherComponent />
      </div>
    );
  }
}

describe('`isComponentOfType`', function() {
  beforeEach(function() {
    this.renderer = createRenderer();
    this.renderer.render(<Test />);
    this.tree = this.renderer.getRenderOutput();
  });

  it('should return `true` when a DOM component is the correct type', function() {
    expect(isComponentOfType(this.tree, 'div')).toBe(true);
  });

  it('should return `false` when a DOM component is not the correct type', function() {
    expect(isComponentOfType(this.tree, 'header')).toBe(false);
  });

  it('should return `true` when a composite component is the right type', function() {
    expect(isComponentOfType(this.tree.props.children, OtherComponent)).toBe(true);
  });

  it('should return `false` when a composite component is not the right type', function() {
    expect(isComponentOfType(this.tree.props.children, WrongComponent)).toBe(false);
  });
});
