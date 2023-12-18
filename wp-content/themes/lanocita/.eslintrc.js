module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true,
    },
    extends: 'airbnb-base',
    rules: {
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'linebreak-style': ['error', 'windows'],
        'padded-blocks': ['error', {
            switches: 'always',
            classes: 'always',
        }, { allowSingleLineBlocks: true }],
        'import/prefer-default-export': 'off',
        indent: [2, 4, { SwitchCase: 1 }],
        'func-names': ['error', 'never', { generators: 'always' }],
        'no-trailing-spaces': ['error', {
            skipBlankLines: true,
            ignoreComments: true,
        }],
        'no-use-before-define': ['error', { functions: false }],
        'no-underscore-dangle': 'off',
        camelcase: 'off',
    },
};
