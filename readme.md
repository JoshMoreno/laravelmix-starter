This is an example using laravel mix to compile bootstrap js and sass

To replicate you install the following:
```
yarn add laravel-mix bootstrap jquery popper.js
```

Create the `webpack.mix.js` file with all the instructions on what files to compile and where to output them.

Add the following to the `package.json`
```
"scripts": {
  "dev": "NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "watch": "NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "production": "NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}
```

And that's it. You can now install libraries from [npmjs.com](https://www.npmjs.com/) easily and then include them according to the packages instructions in your js and scss files.

Look up es6 modules to learn more. Maybe this article - [https://www.sitepoint.com/understanding-es6-modules/](https://www.sitepoint.com/understanding-es6-modules/)

# Commands
```bash
# watch assets for changes and start browsersync
yarn watch

# compile the assets once without produciton optimizations
yarn dev

# compiles the assets with optimizations for production
yarn production
```