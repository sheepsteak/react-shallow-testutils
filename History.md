
v2.0.0 / 2016-04-21
===================

No changes from v2.0.0-beta1

v2.0.0-beta1 / 2016-04-09
===================

Updated to `react@15` [#30](https://github.com/sheepsteak/react-shallow-testutils/pull/30)
Updated ESLint and Babel
Added `npm run clean` command

v1.0.0 / 2016-01-22
===================

Updated to Babel 6 [#15](https://github.com/sheepsteak/react-shallow-testutils/pull/15)

v0.7.1 / 2015-12-07
===================

Fixed forgetting to add export for `findWithRef`

v0.7.0 / 2015-12-07
==================

Added `findWithRef` [#13](https://github.com/sheepsteak/react-shallow-testutils/pull/13) ([@rkovacevic](https://github.com/rkovacevic))

v0.6.1 / 2015-11-17
==================

Fixed `findAllWithClass` to not use `String.includes` #12

v0.6.0 / 2015-10-15
===================

*Contains a breaking change by removing `Renderer`*

Removed `Renderer` as it's no longer needed with React 0.14 #10
Added `getMountedInstance` function to retreive the root component from renderer #10
Added `pre-commit` hook that checks linting and tests #9

v0.5.0 / 2015-10-08
===================

*Contains a breaking change by using React 0.14*

Updated to React 0.14 #8 (plus help from @themouette #2)

0.4.0 / 2015-10-08
==================

*Contains a breaking change to `Renderer`*

Changed `render` of `Renderer` to now take a function #6

0.3.0 / 2015-09-13
==================

Add support for multiple class names @stefanbuck #4

0.2.1 / 2015-07-22
==================

Fixed space in package.json entry point

0.2.0 / 2015-07-20
==================

Added more documentation
Added `isComponentOfType`
