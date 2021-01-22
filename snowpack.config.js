module.exports = {
	extends: 'snowpack-plugin-angular/snowpack.config.js',
	mount: { public: '/' },
	alias: {
		styles: './public/styles',
	},
	plugins: ['snowpack-plugin-angular']
};
