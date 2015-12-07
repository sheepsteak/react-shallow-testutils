# react-shallow-testutils
Replacement for TestUtils when using React's shallow rendering.

[![Circle CI](https://circleci.com/gh/sheepsteak/react-shallow-testutils.png?circle-token=acb1a68cfaeb110ccc4901ac8171750fcbadf5b5)](https://circleci.com/gh/sheepsteak/react-shallow-testutils)

```
npm install react-shallow-testutils
```

### React Versions

If you're using React 0.13 then stick to `0.4.0` as `0.5.0` and onwards will support React 0.14.

### getMountedInstance
Returns the mounted component from a shallow renderer. This function will be on the shallow renderer itself in React 0.15 but I've included it in this module for now as it's so useful. It allows you to call instance functions like `forceUpdate`.

```javascript
import ReactTestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';

const renderer = ReactTestUtils.createRenderer();
renderer.render(<MyComponent />, context);
const component = ShallowTestUtils.getMountedInstance(renderer);
```

### isComponentOfType
Returns whether a component instance is of a particular type.

```javascript
boolean isComponentOfType(ReactComponent component, function componentClass)
```

### isDOMComponent
Returns whether the supplied component is a DOM component or not

```javascript
boolean isDOMComponent(function component)
```

### findAll
Traverses the tree and returns all components that satisfy the function `test`.

```javascript
array findAll(ReactComponent tree, function test)
```

### findAllWithType
Finds all instances of components in the tree with a type that matches
`type`. This is like both React's `scryRenderedDOMComponentsWithTag` and `scryRenderedComponentsWithType` as you can supply a component class or a DOM tag.

```javascript
array findAllWithType(ReactComponent tree, function componentClass | string tagName)
```

### findWithType
Find only one instance of a components in the tree with a type that matches
`type`. This is like both React's `findRenderedDOMComponentWithTag` and `findRenderedComponentWithType` as you can supply a component class or a DOM tag.

```javascript
ReactComponent findWithType(ReactComponent tree, function componentClass | string tagName)
```

### findAllWithClass
Finds all instances of components in the tree with a class that matches `className`. This is different to React's `scryRenderedDOMComponentsWithClass` in that it will check **all** components and not just DOM components.

```javascript
array findAllWithClass(ReactComponent tree, string className)
```

You can pass a `className` like `test-class.test-class--modified` to find a component that has both classes.

### findWithClass
Find only one instance of a component in the tree with a class that matches `className`. This is different to React's `findRenderedDOMComponentWithClass` in that it will check **all** components and not just DOM components.

```javascript
ReactComponent findWithClass(ReactComponent tree, string className)
```

You can pass a `className` like `test-class.test-class--modified` to find a component that has both classes

### findWithRef
Find only one instance of a component in the tree with a ref that matches `ref`.

```javascript
ReactComponent findWithRef(ReactComponent tree, string ref)
```
