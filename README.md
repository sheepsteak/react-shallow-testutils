# react-shallow-testutils
Replacement for TestUtils when using React's shallow rendering.

[![Circle CI](https://circleci.com/gh/sheepsteak/react-shallow-testutils.png?circle-token=acb1a68cfaeb110ccc4901ac8171750fcbadf5b5)](https://circleci.com/gh/sheepsteak/react-shallow-testutils)

```
npm install react-shallow-testutils
```

### React Versions

If you're using React 0.13 then stick to `0.4.0`. `0.5.0` and onwards will support React 0.14.

### Renderer
A wrapper around React's [shallow rendering](http://facebook.github.io/react/docs/test-utils.html#shallow-rendering) that makes it easier to use a context.

Takes a function that returns your components to render as well as an optional context:

```javascript
const renderer = new Renderer();
const toRender = () => <MyComponent {...props} />;
const context = {data: 1};
const componentTree = renderer.render(toRender, context);
```

`Renderer` also has a `root` getter that allows access to the root component in the rendered output. This is useful for calling methods on the component.

```javascript
const renderer = new Renderer();
const toRender = () => <MyComponent {...props} />;
const context = {data: 1};
renderer.render(toRender, context);
const component = renderer.root;
component.myMethod();
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
