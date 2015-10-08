import Renderer from '../src/renderer';
import React from 'react/addons';

class MyComponent extends React.Component {
  static contextTypes = {
    region: React.PropTypes.string
  }
  constructor() {
    super();

    this.state = {test: 'test'};
  }
  render() {
    return (
      <div className='test-class'>
        {this.state.test}
        {
          this.context.region
          ? this.context.region
          : null
        }
      </div>
    );
  }
}

describe('`Renderer`', function() {
  it('should have a `renderer property after contruction`', function() {
    const renderer = new Renderer();

    expect(renderer.renderer).toBeDefined();
  });

  it('should render a component tree', function() {
    const renderer = new Renderer();

    const tree = renderer.render(() => <MyComponent />);

    expect(tree.type).toBe('div');
    expect(tree.props.children[0]).toEqual('test');
  });

  it('should render a component tree with context', function() {
    const renderer = new Renderer();

    const tree = renderer.render(() => <MyComponent />, {
      region: 'UK'
    });

    expect(tree.type).toBe('div');
    expect(tree.props.children[0]).toEqual('test');
    expect(tree.props.children[1]).toEqual('UK');
  });

  it('should provide the root component', function() {
    const renderer = new Renderer();

    renderer.render(() => <MyComponent testProp={2} />);

    const root = renderer.root;

    expect(React.addons.TestUtils.isCompositeComponentWithType(root, MyComponent));
    expect(root.props.testProp).toBe(2);
  });
});
