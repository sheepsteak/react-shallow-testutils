import ReactShallowTestUtils from '../src';
import {
    findAll,
    findAllWithClass,
    findAllWithType,
    findWithClass,
    findWithRef,
    findWithType,
    getMountedInstance,
    isComponentOfType,
    isDOMComponent
} from '../src';

describe('ReactShallowTestUtils', function() {
  it('should expose a default object with named functions', function() {
    expect(typeof ReactShallowTestUtils.findAll).toBe('function');
    expect(typeof ReactShallowTestUtils.findAllWithClass).toBe('function');
    expect(typeof ReactShallowTestUtils.findAllWithType).toBe('function');
    expect(typeof ReactShallowTestUtils.findWithClass).toBe('function');
    expect(typeof ReactShallowTestUtils.findWithRef).toBe('function');
    expect(typeof ReactShallowTestUtils.findWithType).toBe('function');
    expect(typeof ReactShallowTestUtils.getMountedInstance).toBe('function');
    expect(typeof ReactShallowTestUtils.isComponentOfType).toBe('function');
    expect(typeof ReactShallowTestUtils.isDOMComponent).toBe('function');
  });

  it('should expose individually named exports', function() {
      expect(typeof findAll).toBe('function');
      expect(typeof findAllWithClass).toBe('function');
      expect(typeof findAllWithType).toBe('function');
      expect(typeof findWithClass).toBe('function');
      expect(typeof findWithRef).toBe('function');
      expect(typeof findWithType).toBe('function');
      expect(typeof getMountedInstance).toBe('function');
      expect(typeof isComponentOfType).toBe('function');
      expect(typeof isDOMComponent).toBe('function');
  });
});
