module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:jest/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:unicorn/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'import', 'unicorn', 'jest'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },

        jest: {
            version: 26,
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension

            // As mentioned in the comments, you should extend TypeScript plugins here,
            // instead of extending them outside the `overrides`.
            // If you don't want to extend any rules, you don't need an `extends` attribute.
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],

            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        },
    ],
    ignorePatterns: ['**/*.js', '**/*.json', 'node_modules'],
    rules: {
        // typescript
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': [
            'error',
            { ignoreRestArgs: true },
        ],
        // react
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': [
            'error',
            {
                functions: 'defaultArguments',
            },
        ],
        //import
        'import/no-unresolved': 'off',
        'import/no-duplicates': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-extraneous-dependencies': [
            'off',
            {
                devDependencies: [
                    '**/*.test.{ts,tsx,js,jsx}',
                    '**/*.spec.{ts,tsx,js,jsx}',
                ],
            },
        ],

        //eslint
        '@typescript-eslint/no-unused-expressions': ['warn'],
        'no-param-reassign': 'off',
        'import/prefer-default-export': 'off',
        'no-restricted-imports': 'off',
        'no-console': 'warn',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ['return'],
            },
        ],

        //a11y
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],

        //unicorn
        'unicorn/prevent-abbreviations': [
            'error',
            {
                allowList: {
                    getInitialProps: true,
                    getServerSideProps: true,
                    getStaticProps: true,
                    props: true,
                    Props: true,
                    args: true,
                },
            },
        ],
    },
}
