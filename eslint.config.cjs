const globals = require('globals');
const js = require('@eslint/js');
const {FlatCompat} = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [{
    ignores: ['dist/*'],
}, ...compat.extends('eslint:recommended'), {
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
            Atomics: 'readonly',
            SharedArrayBuffer: 'readonly',
        },

        ecmaVersion: 2020,
        sourceType: 'module',
    },

    rules: {
        indent: 2,
    },
}];
