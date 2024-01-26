module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs,ts,tsx}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'no-unused-vars': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-underscore-dangle': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
