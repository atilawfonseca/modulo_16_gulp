const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const compressImage = require('gulp-imagemin');

function compilSass() {
    return gulp.src('./src/styles/styles.scss')
    .pipe(maps.init())
    .pipe(sass({
        outputStyle:'compressed'
    }))
    .pipe(maps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}
function comprimirJS(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}
function cumpriImage(){
    return gulp.src('./src/images/*')
    .pipe(compressImage())
    .pipe(gulp.dest('./build/images'));
}


exports.default = function (){
    gulp.watch('./src/styles/*.scss', {ignoreInitial:false},gulp.series(compilSass));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false},gulp.series(comprimirJS));
    gulp.watch('./src/images/*', {ignoreInitial:false},gulp.series(cumpriImage));
}