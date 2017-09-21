# react-starter-kit
react-starter-kit includes React, React Router, Jest, Enzyme,
Webpack 3, Babel, Browsersync, LESS, ESLint, PostCSS.

## Requirements
- Node.js
- npm
- yarn

You can find a fresh binaries of Node.js [here](https://github.com/nodesource/distributions).

## Setup
`$ yarn install`

## Commands
### Run development server
##### Run with livereload
`npm run start`

##### Run without livereload
`npm run start:nolivereload`

### Running unit tests

##### Run all tests
`npm run test`

##### Run test for a single module
`npm run test App.test.js`

##### Watch for files change and re-run tests
`npm run test:watch`

### Build

`npm run build`


### Run browsersync
`npm run browsersync`

**NOTE:** development server should be running in parallel.


### Code coverage
`npm run coverage`


## How To's
### How to use Bootstrap?

```
yarn install bootstrap
yarn install jquery
```

Change `index.js` to import bootstrap styles and javascript:
```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
```

If you decided to import `bootstrap.min.js`, you probably hit in the following problem:
```
Uncaught Error: Bootstrap's JavaScript requires jQuery
Bootstrap javascript couldn't be loaded because jQuery was not found.
```

A possible workaround is to use [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/) to inject jQuery automatically for us.
```
modules.exports = {
  plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
  ]
}
```

Also, check [react-bootstrap](https://react-bootstrap.github.io/).

### How to override Bootstrap variables?
Create variables.less and place all variables you want to override.

**variables.less**
```
@btn-primary-color: white;
@btn-primary-bg: green;
```


**index.less**
```
@import '../node_modules/bootstrap/less/variables.less';
@import './variables.less';
@import '../node_modules/bootstrap/less/bootstrap.less';
```

### How to mock require.context?
https://stackoverflow.com/questions/38332094/how-can-i-mock-webpacks-require-context-in-jest

```
// module.js
const requiredStuff = require.context(...);
```

Export the require.context into its own module
```
// customRequire.js
export default require.context(...)
```

Import the module
```
// module.js
import './customRequire';
```

Create `__mocks__` directory adjacent to the `customRequire.js`.
Mock this module and save it as `__mocks__/customRequire.js`

Import the module in test.
```
// test.js
jest.mock('./customRequire');
```

### How to setup global variables when running unit tests?
When using jQuery plugins, *"ReferenceError: jQuery is not defined"* error might be thrown.
Create module that will be run before each test, it will import
jQuery and assign it to be available on `window.jQuery` & `window.$`.

**test/setup.js**
```
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
```

**package.json**
```
"jest": {
    "setupFiles": [
      "<rootDir>/test/setup.js"
    ]
}
```

Also see [jest#globals](https://facebook.github.io/jest/docs/en/configuration.html#globals-object).

### How to run tests before pushing to repository?
Run tests before pushing your code using pre-push hook:
```
cp pre-push .git/hooks
chmod +X .git/hooks/pre-push
```

### How to copy files to dist/ folder?
Install [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin) plugin.
```
yarn add --dev copy-webpack-plugin
```

**webpack.prod.js**
```
const CopyWebpackPlugin = require('copy-webpack-plugin');
...
plugins: [
    new CopyWebpackPlugin([
        {from: 'static-file.txt'}
    ])
]
```


### How to import images in bulk?
https://webpack.js.org/guides/dependency-management/#require-context
```
// images.js
/* global require */
export default require.context('../public/images/', false, /.+/);
```

```
// other.js
import images from './images';

images.keys().forEach((imagePath) => {
    // do something with each image path
});
```

## See also
#### Debuggable JavaScript in production with Source Maps
https://blog.sentry.io/2015/10/29/debuggable-javascript-with-source-maps.html
