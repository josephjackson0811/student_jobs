module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0,
		'react/prop-types': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/no-unresolved': 0,
		'import/extensions': 0,
		'no-console': 0,
		'react/jsx-closing-bracket-location': 0,
		'comma-dangle': 0,
		'linebreak-style': 0,
		'no-nested-ternary': 0,
		'no-confusing-arrow': 0,
		'implicit-arrow-linebreak': 0,
		'jsx-quotes': 0,
		'react/state-in-constructor': 0,
		'no-mixed-spaces-and-tabs': 0,
		'react/no-unescaped-entities': 0,
		'import/prefer-default-export': 0,
		'max-len': [2, 250],
		'object-curly-newline': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-one-expression-per-line': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/alt-text': 0,
		'jsx-a11y/no-autofocus': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'react/no-array-index-key': 0,
		'no-param-reassign': 0,
		'react/react-in-jsx-scope': 0,
		'react/jsx-props-no-spreading': 0,
		'no-sparse-arrays': 0,
		'no-array-index-key': 0,
		camelcase: 0,
		'react/require-default-props': 0,
	},
};
