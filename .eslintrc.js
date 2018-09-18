// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
    mocha: true,
    jasmine: true,
    es6: true,
    node: true,
    commonjs: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'standard',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/standard',
  ],
  // required to lint *.vue files
  plugins: [
    'flowtype',
    'prettier',
    'standard'
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'prettier/prettier': 'error',
    'arrow-parens': 0,
    'semi': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 0,
    'space-before-function-paren': 0,
    'eqeqe': 0,
    'comma-dangle': 0,
    'camelcase': 0,
    'no-unexpected-multiline': 2,
    'flowtype/newline-after-flow-annotation': 0,
    'flowtype/define-flow-type': 2,
    'flowtype/use-flow-type': 0,
    'flowtype/no-weak-types': [2, {
      "any": false,
      "Object": true,
      "Function": true
    }]
  }
}
