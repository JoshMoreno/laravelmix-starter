const mix = require('laravel-mix')

// tells webpack where it's allowed to serve files to the browser from
mix.setPublicPath('dist')

// this compiles our js and outputs to the dist folder
mix.js('src/js/app.js', 'dist/')

// this compiles our sass and outputs to the dist folder
mix.sass('src/sass/app.scss', 'dist/')

// if you don't want the name to be the same you can do easily change it
// mix.js('src/js/app.js', 'dist/main.js')
// mix.sass('src/sass/app.scss', 'dist/app.js')

mix.options({
	processCssUrls: false, // speeds up build
});

// lets setup browsersync so we have a nice dev experience
mix.browserSync({
	// whatever live site we want to inject our css and js into
	proxy: 'https://blackrockdigital.github.io/startbootstrap-agency/',
	// if the site uses https you'll need this most likely
	https: true,
	// we have to tell browser sync where it's allowed to grab files from, the root in this case
	// so all paths referencing a local file will start from the root
	serveStatic: ['.'],
	// the files to watch and inject if possible or reload the page if not
	files: [
		'./dist/**/*.css',
		'./dist/**/*.js',
		'./**/*.php',
	],
	// let's replace their css with our local css
	// and their js with our local js (open console to see the console.log('test') in our app.js)
	rewriteRules: [
		{
			match: new RegExp('css/agency.min.css'),
			replace: '/dist/app.css'
		},
		{
			match: new RegExp('js/agency.min.js'),
			replace: '/dist/app.js'
		},
	]
})

// uncomment if you're loading jQuery and Popper.js globally yourself
// then uninstall jquery and popper js with "yarn remove jquery popper.js"
// mix.webpackConfig({
	// externals: {
	// 	jquery: 'jQuery',
	// 	'popper.js': 'Popper',
	// },
// })