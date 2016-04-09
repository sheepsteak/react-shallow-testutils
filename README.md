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

### isComponentOfType
Returns whether a `ReactElement` is of a particular type.

```javascript
boolean isComponentOfType(ReactElement element, function componentClass | string tagName)
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

const tree1 = renderer.render(<MyComponent />);
expect(isComponentOfType(tree1, OtherComponent)).toBe(true);

const tree2 = renderer.render(<MyOtherComponent />);
expect(isComponentOfType(tree2, 'div')).toBe(true);
```

### isDOMComponent
Returns whether the supplied `ReactElement` is a DOM component or not

```javascript
boolean isDOMComponent(ReactElement element)
```

```javascript
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {isDOMComponent} from 'react-shallow-testutils';

function MyComponent() {
  return <div />;
}

const renderer = ReactTestUtils.createRenderer();

const tree = renderer.render(<MyComponent />);
expect(isDOMComponent(tree)).toBe(true);
```

### findAll
Traverses the tree and returns all elements that satisfy the function `test`. A lot of the other functions are implemented in terms of this one.

```javascript
array findAll(ReactElement tree, function test)
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

const tree = renderer.render(<MyComponent />);
const spans = findAll(tree, (element) => element.type === 'span');
expect(spans.length).toBe(3);
```

### findAllWithType
Finds all instances of elements in the tree with a type that matches
`type`. This is like both React's `scryRenderedDOMComponentsWithTag` and `scryRenderedComponentsWithType` as you can supply a component class or a DOM tag.

```javascript
array findAllWithType(ReactElement tree, function componentClass | string tagName)
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

const tree = renderer.render(<MyComponent />);
expect(findAllWithType(tree, MyOtherComponent).length).toBe(1);
expect(findAllWithType(tree, 'span').length).toBe(2);
```

### findWithType
Find only one instance of an element in the tree with a type that matches
`type`. This is like both React's `findRenderedDOMComponentWithTag` and `findRenderedComponentWithType` as you can supply a component class or a DOM tag. It will throw an error if not exactly one instance is found.

```javascript
ReactElement findWithType(ReactElement tree, function componentClass | string tagName)
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

const tree = renderer.render(<MyComponent />);
expect(findWithType(tree, MyOtherComponent)).not.toThrow();
expect(findWithType(tree, 'form')).toThrow();
```

### findAllWithClass
Finds all elements in the tree with a `className` prop that matches `className`. This is different to React's `scryRenderedDOMComponentsWithClass` in that it will check **all** components and not just DOM components.

You can pass a `className` like `test-class.test-class--modified` to find an element that has both classes.

```javascript
array findAllWithClass(ReactElement tree, string className)
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

const tree = renderer.render(<MyComponent />);
expect(findAllWithClass(tree, 'my-div').length).toBe(0);
expect(findAllWithClass(tree, 'my-span').length).toBe(2);
```

### findWithClass
Find only one element in the tree with a `className` prop that matches `className`. This is different to React's `findRenderedDOMComponentWithClass` in that it will check **all** components and not just DOM components. It will throw an error if not exactly one instance is found.

You can pass a `className` like `test-class.test-class--modified` to find an element that has both classes.

```javascript
ReactElement findWithClass(ReactElement tree, string className)
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

const tree = renderer.render(<MyComponent />);
expect(findWithClass(tree, 'my-div')).not.toThrow();
expect(findWithClass(tree, 'my-span')).toThrow(); // More than 1
```

### findWithRef
Find only one element in the tree with a `ref` prop that matches `ref`. This is only useful for a `ref` that has been defined as a string and not as a function.

```javascript
ReactElement findWithRef(ReactElement tree, string ref)
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

const tree = renderer.render(<MyComponent />);
expect(findWithRef(tree, 'div-ref').props.className).toBe('div-ref-class');
```
