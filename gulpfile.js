const { src, dest, series, watch } = require('gulp');

const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const scss = require('gulp-sass')(require('sass'));
const autoPrefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist'])
}

const html = () => {
  return src('src/**/*.html')
    .pipe(concat('index.html'))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const styles = () => {
  return src('src/scss/style.scss')
    .pipe(
      scss({ outputStyle: 'expanded' }).on('error', scss.logError)
    )
    .pipe(concat('style.css'))
    .pipe(autoPrefixer({
      overrideBrowserslist: ['last 5 versions'],
      cascade: true,
    }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src('src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

const stylesLibs = () => {
  return src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/swiper/swiper-bundle.css',
    'node_modules/simplebar/dist/simplebar.css',
  ])
    .pipe(cleanCss({
      level: 2,
    }))
    .pipe(concat('libs.min.css'))
    .pipe(dest('dist/css'))
}

const scriptsLibs = () => {
  return src([
    'node_modules/swiper/swiper-bundle.js',
    'node_modules/choices.js/public/assets/scripts/choices.js',
    'node_modules/simplebar/dist/simplebar.js',
    'node_modules/just-validate/dist/just-validate.production.min.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('dist/js'))
}

const images = () => {
  return src([
    'src/images/**/*jpg',
    'src/images/**/*png',
    'src/images/*svg',
    'src/images/**/*jpeg',
  ])
    .pipe(image())
    .pipe(dest('dist/images'))
    .pipe(browserSync.stream())
}

const fonts = () => {
  return src([
    'src/fonts/**/*.woff',
    'src/fonts/**/*.woff2',
  ])
    .pipe(dest('dist/fonts'))
    .pipe(browserSync.stream())
}


const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    }
  })
}

watch('src/**/*.html', html);
watch('src/scss/**/*.scss', styles);
watch('src/js/**/*.js', scripts);
watch(['src/images/**/*jpg', 'src/images/**/*png', 'src/images/*svg', 'src/images/**/*jpeg'], images);
watch(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'], fonts);

exports.clean = clean;
exports.images = images;
exports.fonts = fonts
exports.scriptsLibs = scriptsLibs;
exports.stylesLibs = stylesLibs;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;

exports.default = series(clean, images, fonts, scriptsLibs, stylesLibs, html, styles, scripts, watchFiles)