# Baseline Rails Install

## Tailwind Install

This currently works with Rails 6.0.4.x To use Rails 6.1.x, there are options to use postcss7 as opposed to 8.

In order to use updated versions of Tailwind, some NPM packages require specific versions:

```
"dependencies": {
  "@rails/webpacker": "4.3.0",
  "autoprefixer": "^10",
  "postcss": "^8",
  "postcss-loader": "^4",
  "tailwindcss": "^2",
  ...
},
"devDependencies": {
  "@webpack-cli/serve": "^1.5.2",
  "webpack-dev-server": "~3"
}
```

Add the following to `config/webpack/environment.js`

```
// https://github.com/rails/webpacker/issues/2784#issuecomment-737003955
function hotfixPostcssLoaderConfig(subloader) {
  const subloaderName = subloader.loader
  if (subloaderName === 'postcss-loader') {
    if (subloader.options.postcssOptions) {
      console.log(
        '\x1b[31m%s\x1b[0m',
        'Remove postcssOptions workaround in config/webpack/environment.js'
      )
    } else {
      subloader.options.postcssOptions = subloader.options.config
      delete subloader.options.config
    }
  }
}

environment.loaders.keys().forEach((loaderName) => {
  const loader = environment.loaders.get(loaderName)
  loader.use.forEach(hotfixPostcssLoaderConfig)
})

```

#### Tailwind Config

1. Run `npx tailwindcss init`. This will generate the tailwind.config.js file at the root of the project.
1. `mdkir app/javascript/stylesheets`
1. `touch app/javascript/stylesheets/application.scss`
1. Add the following to application.scss: `@tailwind base; @tailwind components;@tailwind utilities;`
1. Add `require('stylesheets/application.scss')` to `/app/javascript/packs/application.js`
1. Add `<%= stylesheet_pack_tag 'application', 'data-turbolinks-track': 'reload' %>` to `application.html.erb`

Requires two terminals:

- Terminal 1: `rails s`
- Terminal 2: `bin/webpack-dev-server`. This will provide hot reloading of pages, too. Pretty sweet!
