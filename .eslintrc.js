module.exports = {
	settings: {
		react: {
			version: 'detect'
		}
	},
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
		'react/react-in-jsx-scope': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'padding-line-between-statements': [
			'error',
			{ 'blankLine': 'always', 'prev': '*', 'next': 'return' }
		],
		'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
		'no-trailing-spaces': 'error',
		'eol-last': ['error', 'never'],
		'comma-dangle': ['error', 'never']
	}
}