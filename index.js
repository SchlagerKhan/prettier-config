module.exports = {
	printWidth: 150,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	jsxBracketSameLine: false,
	arrowParens: 'always',
	htmlWhitespaceSensitivity: 'strict',
	overrides: [
		{
			files: '*.yml',
			options: {
				semi: true,
				tabWidth: 2,
			},
		},
	],
};
