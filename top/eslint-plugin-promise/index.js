'use strict'

const recommendedRules = {
  'promise/always-return': 'error',
  'promise/no-return-wrap': 'error',
  'promise/param-names': 'error',
  'promise/catch-or-return': 'error',
  'promise/no-native': 'off',
  'promise/no-nesting': 'warn',
  'promise/no-promise-in-callback': 'warn',
  'promise/no-callback-in-promise': 'warn',
  'promise/avoid-new': 'off',
  'promise/no-new-statics': 'error',
  'promise/no-return-in-finally': 'warn',
  'promise/valid-params': 'warn',
}

const pluginPromise = {
  rules: {
    'param-names': require('./rules/param-names'),
    'no-return-wrap': require('./rules/no-return-wrap'),
    'always-return': require('./rules/always-return'),
    'catch-or-return': require('./rules/catch-or-return'),
    'prefer-await-to-callbacks': require('./rules/prefer-await-to-callbacks'),
    'prefer-await-to-then': require('./rules/prefer-await-to-then'),
    'prefer-catch': require('./rules/prefer-catch'),
    'no-native': require('./rules/no-native'),
    'no-callback-in-promise': require('./rules/no-callback-in-promise'),
    'no-promise-in-callback': require('./rules/no-promise-in-callback'),
    'no-nesting': require('./rules/no-nesting'),
    'avoid-new': require('./rules/avoid-new'),
    'no-new-statics': require('./rules/no-new-statics'),
    'no-return-in-finally': require('./rules/no-return-in-finally'),
    'valid-params': require('./rules/valid-params'),
    'no-multiple-resolved': require('./rules/no-multiple-resolved'),
    'spec-only': require('./rules/spec-only'),
  },
  rulesConfig: {
    'param-names': 1,
    'always-return': 1,
    'no-return-wrap': 1,
    'no-native': 0,
    'catch-or-return': 1,
  },
}
pluginPromise.configs = {
  recommended: {
    plugins: ['promise'],
    rules: recommendedRules,
  },
  'flat/recommended': {
    name: 'promise/flat/recommended',
    plugins: { promise: pluginPromise },
    rules: recommendedRules,
  },
}
module.exports = pluginPromise
