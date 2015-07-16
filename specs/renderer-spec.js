import Renderer from '../src/renderer';
import React from 'react/addons';

class ComponentWithForm extends React.Component {
  constructor() {
    super();

    this.state = {test: 0};
  }
  render() {
    return (
      <div className='test-class'>
        {this.state.test}
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

    const tree = renderer.render(ComponentWithForm);

    expect(tree.type).toBe('div');
    expect(tree.props.children).toBe(0);
  });
});
