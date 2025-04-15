const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

// Compile SCSS
gulp.task('scss', () => {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

// Watch files
gulp.task('serve', () => {
    browserSync.init({
        server: './'
    });
    gulp.watch('./*.scss', gulp.series('scss'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('scss', 'serve'));