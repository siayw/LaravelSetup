const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/user/app.js', 'public/user-asset/globaljs')
    .js('resources/js/admin/app.js', 'public/admin-asset/globaljs')
    .sass('resources/sass/user/app.scss', 'public/user-asset/globalcss')
    .sass('resources/sass/admin/app.scss', 'public/admin-asset/globalcss')
    .sass('resources/sass/tailwind.scss', 'public')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    });
