module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
            }
        ],
        'react-native/no-inline-styles': 0,
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'prettier/prettier': 0,
        '@typescript-eslint/no-empty-interface': 'off',
        'react/no-unstable-nested-components': 0,
        'react/react-in-jsx-scope': 'off',
    },
};
