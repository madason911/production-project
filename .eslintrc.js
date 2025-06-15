module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:storybook/recommended',
    ],
    overrides: [{
        env: {
            node: true,
        },
        files: ['.eslintrc.{js,cjs}', '**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
        parserOptions: {
            sourceType: 'script',
        },
    }],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
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
        // 'i18next/no-literal-string': ['error', {
        //     markupOnly: true,
        //     ignoreAttribute: ['data-testid', 'to'],
        // }],
        'max-len': ['error', {
            ignoreComments: true,
            code: 100,
        }],
        'no-restricted-globals': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'off', // Отключить предупреждения по доступу к необязательным свойствам
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'i18next/no-literal-string': 'off', // Отключить предупреждения по строкам без интернационализации

        // React Hooks rules
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    },
    globals: {
        __IS_DEV__: true,
    },
};
