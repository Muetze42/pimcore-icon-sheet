const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
    .js('resources/js/app.js', 'docs/js/app.js')
    .vue({
        extractStyles: true,
        globalStyles: false,
    })
    .setPublicPath('docs')
    .sass('resources/scss/app.scss', 'css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .version()
    .disableNotifications()
    .sourceMaps();
