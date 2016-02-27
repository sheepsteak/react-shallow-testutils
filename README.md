# react-shallow-testutils
Replacement for TestUtils when using React's shallow rendering.

[![Circle CI](https://circleci.com/gh/sheepsteak/react-shallow-testutils.png?circle-token=acb1a68cfaeb110ccc4901ac8171750fcbadf5b5)](https://circleci.com/gh/sheepsteak/react-shallow-testutils)

[![NPM](https://nodei.co/npm/react-shallow-testutils.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-shallow-testutils)

```
npm install react-shallow-testutils
```

## React Versions

If you're using React 0.13 then stick to `0.4.0` as `0.5.0` and onwards will support React 0.14.

## Usage

All the functions are exported separately. This means you can pull in just the ones you want like this:

```javascript
import {findWithType, findWithClass} from 'react-shallow-testutils';

findWithType(tree, …);
```

However, if you want everything then you can do this:

```javascript
import * as ShallowTestUtils from 'react-shallow-testutils';

ShallowTestUtils.findWithType(tree, …);
```

### getMountedInstance
Returns the mounted component from a shallow renderer. This function will be on the shallow renderer itself in React 15 but it's included in this module for now as it's so useful. It allows you to call instance functions like `forceUpdate`.

**This won't work with stateless components** as React doesn't keep a reference to the component. Also, since they are functions they won't have any instance functions on them to call anyway!

```javascript
import React, {Component} from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {getMountedInstance} from 'react-shallow-testutils';

class MyComponent extends Component {
  getCount() {
    return this.props.count;
  }
  render() {
    return <div>{this.props.count}</div>;
  }
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent count={10} />);
const myComponent = getMountedInstance(renderer);
expect(myComponent.getCount()).toEqual(10);
```

### isComponentOfType
Returns whether a component instance is of a particular type.

```javascript
boolean isComponentOfType(ReactComponent component, function componentClass | string tagName)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {isComponentOfType} from 'react-shallow-testutils';

function MyOtherComponent() {
  return <div />;
}

function MyComponent() {
  return <OtherComponent />;
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(isComponentOfType(renderer.getRenderOutput(), OtherComponent)).toBe(true);

renderer.render(<MyOtherComponent />);
expect(isComponentOfType(renderer.getRenderOutput(), 'div')).toBe(true);
```

### isDOMComponent
Returns whether the supplied component is a DOM component or not

```javascript
boolean isDOMComponent(function component)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {isDOMComponent} from 'react-shallow-testutils';

function MyComponent() {
  return <div />;
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(isDOMComponent(renderer.getRenderOutput())).toBe(true);
```

### findAll
Traverses the tree and returns all components that satisfy the function `test`. A lot of the other functions are implemented in terms of this one.

```javascript
array findAll(ReactComponent tree, function test)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {findAll} from 'react-shallow-testutils';

function MyComponent() {
  return (
    <div>
      <span />
      <span />
      <span />
    </div>
  );
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(findAll(renderer.getRenderOutput(), (component) => component.type === 'span')).toBe(3);
```

### findAllWithType
Finds all instances of components in the tree with a type that matches
`type`. This is like both React's `scryRenderedDOMComponentsWithTag` and `scryRenderedComponentsWithType` as you can supply a component class or a DOM tag.

```javascript
array findAllWithType(ReactComponent tree, function componentClass | string tagName)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {findAllWithType} from 'react-shallow-testutils';

function MyOtherComponent() {
  return <div />;
}

function MyComponent() {
  return (
    <div>
      <span />
      <MyOtherComponent />
      <span />
    </div>
  );
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(findAllWithType(renderer.getRenderOutput(), MyOtherComponent)).toBe(1);
expect(findAllWithType(renderer.getRenderOutput(), 'span')).toBe(2);
```

### findWithType
Find only one instance of a components in the tree with a type that matches
`type`. This is like both React's `findRenderedDOMComponentWithTag` and `findRenderedComponentWithType` as you can supply a component class or a DOM tag. It will throw an error if not exactly one instance is found.

```javascript
ReactComponent findWithType(ReactComponent tree, function componentClass | string tagName)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {findWithType} from 'react-shallow-testutils';

function MyOtherComponent() {
  return <div />;
}

function MyComponent() {
  return (
    <div>
      <span />
      <MyOtherComponent />
      <span />
    </div>
  );
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(findWithType(renderer.getRenderOutput(), MyOtherComponent)).not.toThrow();
expect(findWithType(renderer.getRenderOutput(), 'form')).toThrow();
```


### findAllWithClass
Finds all instances of components in the tree with a class that matches `className`. This is different to React's `scryRenderedDOMComponentsWithClass` in that it will check **all** components and not just DOM components.

You can pass a `className` like `test-class.test-class--modified` to find a component that has both classes.

```javascript
array findAllWithClass(ReactComponent tree, string className)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {findAllWithClass} from 'react-shallow-testutils';

function MyOtherComponent() {
  return <div />;
}

function MyComponent() {
  return (
    <div>
      <span className='my-span' />
      <MyOtherComponent />
      <span className='my-span' />
    </div>
  );
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(findAllWithClass(renderer.getRenderOutput(), 'my-div')).toBe(0);
expect(findAllWithClass(renderer.getRenderOutput(), 'my-span')).toBe(2);
```

### findWithClass
Find only one instance of a component in the tree with a class that matches `className`. This is different to React's `findRenderedDOMComponentWithClass` in that it will check **all** components and not just DOM components. It will throw an error if not exactly one instance is found.

You can pass a `className` like `test-class.test-class--modified` to find a component that has both classes.

```javascript
ReactComponent findWithClass(ReactComponent tree, string className)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';

function MyOtherComponent() {
  return <div className='my-div' />;
}

function MyComponent() {
  return (
    <div>
      <span className='my-span' />
      <MyOtherComponent />
      <span className='my-span' />
    </div>
  );
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(findWithClass(renderer.getRenderOutput(), 'my-div')).not.toThrow();
expect(findWithClass(renderer.getRenderOutput(), 'my-span')).toThrow(); // More than 1
```

### findWithRef
Find only one instance of a component in the tree with a `ref` that matches `ref`. This is only useful for a `ref` that has been defined as a string and not as a function.

```javascript
ReactComponent|ReactComponent[] findWithRef(ReactComponent tree, string ref [, string ref...])
```
#### Usage
```
const header = ShallowTestUtils.findWithRef(component, 'head')
const [list, close] = ShallowTestUtils.findWithRef(component, 'list', 'close-button')
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {findWithRef} from 'react-shallow-testutils';

function MyComponent() {
  return (
    <div>
      <span className='my-span' />
      <div className='div-ref-class' ref='div-ref' />
      <span className='my-span' />
    </div>
  );
}

const renderer = ReactTestUtils.createRenderer();

renderer.render(<MyComponent />);
expect(findWithRef(renderer.getRenderOutput(), 'div-ref').props.className).toBe('div-ref-class');
```
