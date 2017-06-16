"use strict";

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');
var wiredep = require('wiredep').stream; //автоподключение библиотек html
var useref = require('gulp-useref'); //автопрописываем пути к библиотекам при сборке

gulp.task('bower', function () {
    gulp.src('app/index.html')
        .pipe(wiredep({
            directory: "app/bower_components"
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.css', ['css']);
    gulp.watch('bower.json', ['bower'])
});

// gulp.task('js', function () {
//     gulp.src('')
//       ////////
//         .pipe(gulp.dest('build/js'))
//         .pipe(notify('Done!'));
// });

// Build
gulp.task('css', function () {
    return gulp.src('app/**/*.css')
        .pipe(concatCss('bundle.css'))
        .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 9'))
        .pipe(rename('bundle.min.css'))
        .pipe(uncss({                             //remove unused css
            html: ['index.html', 'app/**/*.html']
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(notify('Done!'));
});

gulp.task('default', function () {
    gulp.watch('app/**/*.css', ['watch', 'css'])
});


