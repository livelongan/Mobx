module.exports = {
    parser: '@typescript-eslint/parser',
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:import/recommended',
        'plugin:react/jsx-runtime',
        // 'airbnb-typescript',

        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.js'],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json"
    },
    globals: {
        __DEV__: true,
        __dirname: false,
        AbortController: false,
        alert: false,
        cancelAnimationFrame: false,
        cancelIdleCallback: false,
        clearImmediate: true,
        clearInterval: false,
        clearTimeout: false,
        console: false,
        document: false,
        ErrorUtils: false,
        escape: false,
        Event: false,
        EventTarget: false,
        exports: false,
        fetch: false,
        FileReader: false,
        FormData: false,
        global: false,
        Headers: false,
        Intl: false,
        Map: true,
        module: false,
        navigator: false,
        process: false,
        Promise: true,
        requestAnimationFrame: true,
        requestIdleCallback: true,
        require: false,
        Set: true,
        setImmediate: true,
        setInterval: false,
        setTimeout: false,
        queueMicrotask: true,
        URL: false,
        URLSearchParams: false,
        WebSocket: true,
        window: false,
        XMLHttpRequest: false,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        }
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                useTabs: false,
                printWidth: 80,
                semi: false,
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
                endOfLine: 'lf',
            }

        ],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',

        'no-console': 'off',
        'no-nested-ternary': 'warn',
        'class-methods-use-this': 'warn',
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['self'] },],

        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-await-in-loop': 'warn',
        'global-require': 'off',

        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/no-empty-function': [
            'error',
            {
                allow: [
                    'arrowFunctions',
                    'functions',
                    'methods',
                    'private-constructors',
                    'protected-constructors',]
            }

        ],
        '@typescript-eslint/explicit-member-accessibility': 'warn',

        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['camelCase'],
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
            },
            {
                selector: 'parameter',
                format: ['PascalCase'],
                suffix: ['Component'],
            }, {
                selector: 'property',
                format: ['camelCase', 'snake_case', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            }
        ],

        '@typescript-eslint/no-var-requires': 'warn',
        // '@typescript-eslint/prefer-optional-chain': ['error'],
        '@typescript-eslint/prefer-nullish-coalescing': ['error'],

        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-anonymous-default-export': 'warn',
        'import/no-internal-modules': [
            'warn',
            { allow: ['styled-components/native', 'react-dom/client', '@progress/kendo-react-dateinputs'] },
        ],
        'import/no-self-import': 'error',
        'import/namespace': 'off',

        'react/destructuring-assignment': [
            'error',
            'always',
            { ignoreClassFields: true },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off', // ? using typescript for type checking
        'react/self-closing-comp': 'error',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',



        // "react-hooks/exhaustive-deps": "error" // tried each
    },

}
