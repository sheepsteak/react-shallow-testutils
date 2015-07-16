# react-shallow-testutils
Replacement for TestUtils when using React's shallow rendering.
```
npm install react-shallow-testutils
```

### Renderer
A wrapper around React's [shallow rendering](http://facebook.github.io/react/docs/test-utils.html#shallow-rendering) that makes it easier to use a context.

```javascript
this.renderer = new Renderer();
const componentTree = this.renderer.render(function componentClass, Object context, Object props);
```

### findAllWithType
Similar to [scryRenderedComponentsWithType](http://facebook.github.io/react/docs/test-utils.html#scryrenderedcomponentswithtype), finds all components in the tree that match a certain type or DOM tag.

```javascript
array findAllWithType(ReactComponent tree, function componentClass | string tagName)
```

### findWithType
Similar to [findRenderedComponentWithType](http://facebook.github.io/react/docs/test-utils.html#findrenderedcomponentwithtype), find one component in the tree that matches a certain type or DOM tag. If none or more than one then throws an error.

```javascript
ReactComponent findAllType(ReactComponent tree, function componentClass | string tagName)
```

### findAllWithClass
Similar to [scryRenderedDOMComponentsWithClass](http://facebook.github.io/react/docs/test-utils.html#scryRenderedDOMComponentsWithClass), finds all components in the tree that match a certain class name.

```javascript
array findAllWithClass(ReactComponent tree, string className)
```

### findWithClass
Similar to [findRenderedDOMComponentWithClass](http://facebook.github.io/react/docs/test-utils.html#findRenderedDOMComponentWithClass), find one component in the tree that has a certain class name. If none or more than one then throws an error.

```javascript
ReactComponent findWithClass(ReactComponent tree, string className)
```
