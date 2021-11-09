module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy('src/assets');

	return {
		addPassthroughFileCopy: true,
		markdownTemplateEngine: 'njk',
		templateFormats: ['html', 'njk', 'md'],
		dir: {
			input: 'src',
			output: '/',
			includes: 'includes',
			layouts: 'layouts',
			data: 'data'
		}
	}
}