"use strict"

const gulp = require("gulp");
const rename = require("gulp-rename");
const csso = require("gulp-csso");
const sass = require("gulp-sass");

gulp.task("css", function () {
  return gulp.src("scss/style.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("css"))
});

gulp.task("watch", function () {
  gulp.watch("scss/**/*.{scss, sass}", gulp.series("css"));
});
